import Axios from "axios";
import Constants from "expo-constants";

const { apiURL } = Constants.manifest.extra;

export const API = Axios.create({
  baseURL: apiURL,
  headers: {
    "Content-Type": "application/json",
  },
});
