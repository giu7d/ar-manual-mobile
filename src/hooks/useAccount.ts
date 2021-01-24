import { useEffect, useState } from "react";
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

  const _loadAccountFromLocalStorage = async () => {
    const token = await AsyncStorage.getItem("token");
    console.log(token);
    if (token) {
      const { data } = decodeJWT(token);
      const account = new Account({ ...data, token });
      API.defaults.headers["Authorization"] = `Bearer ${token}`;
      applicationStore.setAccount(account);
    }
  };

  const authAccount = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const { token } = await authenticate(email, password);
      API.defaults.headers["Authorization"] = `Bearer ${token}`;
      const { data } = decodeJWT(token);

      const account = new Account({ ...data, token });

      await AsyncStorage.setItem("token", token);
      applicationStore.setAccount(account);
    } catch (error) {
      console.log(error);
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
