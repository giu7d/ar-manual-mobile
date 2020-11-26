import useSWR from "swr";

import { TestBenchIndexed } from "../models/TestBenchIndexed";
import { fetcher } from "../services/api";

export const useTestBench = (id: string) => {
  const { data, error } = useSWR(`/testbenches/${id}`, fetcher);

  return {
    testBenches: data as TestBenchIndexed,
    isLoading: !error && !data,
    isError: error,
  };
};
