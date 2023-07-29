import { TextField, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import './SearchField.css';

type SearchFieldProps = {
  onSearch: (event: any) => void,
};

export const SearchField = (
  { onSearch }: SearchFieldProps
) => {
  return (
    <div className="app-search-field">
      <TextField className="app-search-input" label="Search field" type="search" />
      <Button className="app-search-button" variant="contained" onClick={ onSearch }>
        <SearchIcon />
      </Button>
    </div>
  );
};