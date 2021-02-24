import Axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import Constants from "expo-constants";
import { Analysis } from "../models/Analysis";

const { API_URL } = Constants.manifest.extra;

export const API = Axios.create({
  baseURL: API_URL,
  headers: {
    "Client-Type": "ANALYSIS_MOBILE_APP", // Identify app to get API permission
  },
});

export const fetcher = (url: string, configs?: AxiosRequestConfig) =>
  API.get(url, configs).then((res) => res.data);

export const authenticateAccount = async (email: string, password: string) => {
  const { data }: AxiosResponse<IAuthenticationResponse> = await API.post(
    "/accounts/auth",
    {
      email,
      password,
    }
  );
  return data;
};

export const persistAnalysis = async (
  id: string,
  payload: {
    analysis: Analysis[];
    startedAt: Date;
    finishedAt: Date;
  }
) => {
  const analysisStatus =
    payload.analysis.filter(({ status }) => status === "failure").length === 0
      ? "approved"
      : "failure";

  const steps = payload.analysis.map(({ id, failure, ...rest }) => {
    return {
      ...rest,
      failure: failure
        ? {
            src: failure.photos,
          }
        : undefined,
    };
  });

  const data = {
    steps,
    status: analysisStatus,
    startedAt: payload.startedAt,
    finishedAt: payload.finishedAt,
  };

  const { status, ...rest }: AxiosResponse = await API.post("/analysis", data, {
    headers: {
      testbenchid: id,
    },
  });

  return status;
};

export const uploadFiles = async (
  folder: "failures" | string,
  files: string[]
) => {
  const { data }: AxiosResponse<IImageUploadResponse[]> = await API.post(
    `/upload/base64/${folder}`,
    {
      files,
    }
  );

  return data;
};
