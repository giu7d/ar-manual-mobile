import { useEffect, useState } from "react";
import * as Sentry from "sentry-expo";
import decodeJWT from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Account } from "../models/Account";
import { API, authenticateAccount as authenticate } from "../services/api";
import { useStores } from "./useStores";

export const useAccount = () => {
  const { applicationStore } = useStores();
  const [isError, setIsError] = useState<Error | null>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    _loadAccountFromLocalStorage();
  }, []);

  const _setAccount = (data: any, token: string) => {
    const account = new Account({ ...data, token });

    API.defaults.headers["Authorization"] = `Bearer ${token}`;
    applicationStore.setAccount(account);
    Sentry.Native.setUser({ email: account.email, token: account.token });
  };

  const _loadAccountFromLocalStorage = async () => {
    try {
      const token = await AsyncStorage.getItem("token");

      if (!token) throw new Error("No token stored!");

      const { data, exp } = decodeJWT(token);
      const currentDate = Math.floor(new Date().getTime() / 1000);

      if (exp < currentDate) throw new Error("Authentication token expired!");

      _setAccount(data, token);
    } catch (error) {
      logoutAccount();
    }
  };

  const authAccount = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const { token } = await authenticate(email, password);
      const { data } = decodeJWT(token);

      await AsyncStorage.setItem("token", token);

      _setAccount(data, token);
    } catch (error) {
      setIsError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const logoutAccount = async () => {
    applicationStore.clear();
    AsyncStorage.clear();
    setIsError(undefined);
    setIsLoading(false);
  };

  return {
    account: applicationStore.account,
    isLoading,
    isError,
    authAccount,
    logoutAccount,
  };
};
