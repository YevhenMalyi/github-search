import { TextField } from '@mui/material';

type SearchFieldProps = {
  onSearch?: Function,
};

export const SearchField = (
  { onSearch }: SearchFieldProps
) => {
  return (
    <TextField label="Search field" type="search" />
  );
};