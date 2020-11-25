import Axios, { AxiosResponse } from "axios";
import Constants from "expo-constants";

const { API_URL } = Constants.manifest.extra;

export const API = Axios.create({
  baseURL: API_URL,
});

export const authenticate = async (email: string, password: string) => {
  const {
    data,
  }: AxiosResponse<IAuthenticationResponse> = await API.post("/accounts/auth", {
    email,
    password,
  });

  API.defaults.headers["Authorization"] = `Bearer ${data.token}`;

  return data;
};

export const getTestbenches = async () => {
  const { data }: AxiosResponse<ITestbenchesResponse> = await API.get(
    "/testbenches"
  );

  return data;
};

export const getTestbench = async (id: string) => {
  const { data }: AxiosResponse<ITestbenchResponse> = await API.get(
    `/testbenches/${id}`
  );

  return data;
};

export const createAnalysis = async (testBenchId: string, payload: {}) => {
  const { status }: AxiosResponse = await API.post("/analysis", payload, {
    headers: {
      testbenchid: testBenchId,
    },
  });

  return status;
};

export const uploadImage = async (
  type: "failures" | string,
  files: string[]
) => {
  const payload = {
    files,
  };

  const { data }: AxiosResponse<IImageUploadResponse> = await API.post(
    `/upload/base64/${type}`,
    payload
  );

  return data;
};
