import useSWR from "swr";

import { TestBench } from "../models/TestBench";
import { fetcher } from "../services/api";

export const useTestBenches = () => {
  const { data, error } = useSWR("/testbenches", fetcher);

  return {
    testBenches: data as TestBench[],
    isLoading: !error && !data,
    isError: error,
  };
};
