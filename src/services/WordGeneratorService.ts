import { useQuery } from "@tanstack/react-query";
import { api } from "./api";

export const useGenerateWordQuery = (numberOfWords: number) => {
  return useQuery<string[]>({
    queryKey: ["Word_Generator", numberOfWords],
    queryFn: async () =>
      (
        await api.get("", {
          params: {
            words: numberOfWords,
          },
        })
      ).data,
  });
};
