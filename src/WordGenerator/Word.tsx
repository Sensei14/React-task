import { Chip } from "@mui/material";

interface Props {
  word: string;
  searchPhrase?: string;
}

const Word = ({ word, searchPhrase }: Props) => {
  return (
    <Chip
      key={word}
      label={word}
      color='primary'
      size='medium'
      variant={searchPhrase && word.includes(searchPhrase) ? "filled" : "outlined"}
    />
  );
};

export default Word;
