import { useMemo } from "react";
import { useGenerateWordQuery } from "../services/WordGeneratorService";
import Word from "./Word";
import { Alert, Box, CircularProgress, Stack, Typography } from "@mui/material";

interface Props {
  numberOfWords: number;
  searchPhrase?: string;
}

const Results = ({ numberOfWords, searchPhrase }: Props) => {
  const generateWordQuery = useGenerateWordQuery(numberOfWords);

  const numberOfOccurences = useMemo(() => {
    if (!generateWordQuery.data || !searchPhrase) return 0;
    return generateWordQuery.data.reduce((total, current) => {
      if (current.includes(searchPhrase)) return total + 1;
      return total;
    }, 0);
  }, [searchPhrase, generateWordQuery.data]);

  if (generateWordQuery.isLoading || generateWordQuery.isFetching)
    return (
      <Box display='flex' gap={4} justifyContent={"center"} flexWrap={"wrap"}>
        <CircularProgress />
      </Box>
    );

  if (numberOfWords < 1)
    return (
      <Box display='flex' gap={4} justifyContent={"center"} flexWrap={"wrap"}>
        <Alert severity='error'>Number of words is invalid</Alert>
      </Box>
    );

  if (generateWordQuery.isError)
    return (
      <Box display='flex' gap={4} justifyContent={"center"} flexWrap={"wrap"}>
        <Alert severity='error'>There was an error. Please check your input and try again</Alert>
      </Box>
    );

  if (!generateWordQuery.data || generateWordQuery.data.length === 0)
    return (
      <Box display='flex' gap={4} justifyContent={"center"} flexWrap={"wrap"}>
        <Alert severity='error'>No words found.</Alert>
      </Box>
    );

  return (
    <Stack gap={4}>
      <Typography variant='subtitle1' sx={{ textAlign: "center" }}>
        Number of occurences of search phrase: {numberOfOccurences}
      </Typography>
      <Box display='flex' gap={4} justifyContent={"center"} flexWrap={"wrap"} mx={4}>
        {generateWordQuery.data?.map((word) => (
          <Word key={word} word={word} searchPhrase={searchPhrase} />
        ))}
      </Box>
    </Stack>
  );
};

export default Results;
