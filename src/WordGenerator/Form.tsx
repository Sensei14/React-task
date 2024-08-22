import {
  Alert,
  Box,
  Chip,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useMemo, useState } from "react";
import { useDebounce } from "use-debounce";
import { useGenerateWordQuery } from "../services/WordGeneratorService";

const Form = () => {
  const [numberOfWords, serNumberOfWords] = useState(10);
  const [debouncedNumber] = useDebounce(numberOfWords, 1000);
  const [searchPhrase, setSearchPhrase] = useState("");

  const generateWordQuery = useGenerateWordQuery(debouncedNumber);

  const numberOfOccurences = useMemo(() => {
    if (!generateWordQuery.data || !searchPhrase) return 0;
    return generateWordQuery.data.reduce((total, current) => {
      if (current.includes(searchPhrase)) return total + 1;
      return total;
    }, 0);
  }, [searchPhrase, generateWordQuery.data]);

  return (
    <Stack gap={4} my={4}>
      <Box display="flex" gap={4} justifyContent={"center"} flexWrap={"wrap"}>
        <TextField
          defaultValue={searchPhrase}
          onChange={(e) => setSearchPhrase(e.target.value)}
          label="Search phrase"
        />
        <TextField
          type="number"
          label="Number of words to generate"
          defaultValue={numberOfWords}
          onChange={(e) => serNumberOfWords(Number(e.target.value))}
        />
      </Box>
      <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
        Number of occurences of search phrase: {numberOfOccurences}
      </Typography>
      <Box display="flex" gap={4} justifyContent={"center"} flexWrap={"wrap"}>
        <>
          {(generateWordQuery.isLoading || generateWordQuery.isFetching) && (
            <CircularProgress />
          )}
          {!generateWordQuery.data ||
            (generateWordQuery.data.length === 0 && (
              <Alert severity="error">No words found.</Alert>
            ))}
          {generateWordQuery.error && (
            <Alert severity="error">
              There was an error. Please check your input and try again
            </Alert>
          )}
          {!generateWordQuery.isLoading &&
            !generateWordQuery.isFetching &&
            generateWordQuery.data?.map((word) => (
              <Chip
                key={word}
                label={word}
                color="primary"
                size="medium"
                variant={
                  searchPhrase && word.includes(searchPhrase)
                    ? "filled"
                    : "outlined"
                }
              />
            ))}
        </>
      </Box>
    </Stack>
  );
};

export default Form;
