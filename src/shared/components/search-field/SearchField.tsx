import { TextField } from '@mui/material';
import { debounce } from '@mui/material/utils';

import './SearchField.css';

type SearchFieldProps = {
  onSearch: (search: string) => void,
};

export const SearchField = (
  { onSearch }: SearchFieldProps
) => {
  return (
    <div className="app-search-field">
      <TextField 
        className="app-search-field__input" 
        label="Search field" 
        type="search" 
        onChange={ debounce((event) => onSearch(event.target.value), 1000) }
      />
    </div>
  );
};