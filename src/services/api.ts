import Axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import Constants from "expo-constants";
import { Analysis } from "../models/Analysis";

const { API_URL } = Constants.manifest.extra;

export const API = Axios.create({
  baseURL: API_URL,
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

  API.defaults.headers["Authorization"] = `Bearer ${data.token}`;

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
  console.log("persistAnalysis");
  console.log(id, payload);
  return 200;

  // const failLength = payload.analysis.filter(
  //   ({ status }) => status === "failure"
  // ).length;
  // const updatedSteps = payload.analysis.map(
  //   async ({ instructionId, status, startedAt, finishedAt, failure }) => {
  //     const updatedPhotos = failure?.photos.map(async (file) => {
  //       if (!file.base64) {
  //         return;
  //       }
  //       const response = await uploadImage("failures", [file.base64]);
  //       return response.url[0];
  //     });
  //     return {
  //       instructionId,
  //       status,
  //       startedAt,
  //       finishedAt,
  //       failure: failure
  //         ? {
  //             src: await Promise.all(updatedPhotos || []),
  //             caoItemId: failure.caoItemId,
  //             description: failure.description || undefined,
  //           }
  //         : undefined,
  //     };
  //   }
  // );
  // const data = {
  //   status: failLength === 0 ? "approved" : "failure",
  //   startedAt: payload.startedAt,
  //   finishedAt: payload.finishedAt,
  //   steps: await Promise.all(updatedSteps),
  // };
  // console.log(data);
  // const { status }: AxiosResponse = await API.post("/analysis", data, {
  //   headers: {
  //     testbenchid: id,
  //   },
  // });
  // return status;
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
