import { useState } from 'react';
import { TextField, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import './SearchField.css';

type SearchFieldProps = {
  onSearch: (search: string) => void,
};

export const SearchField = (
  { onSearch }: SearchFieldProps
) => {
  const [search, setSearch] = useState('');

  const handleClick = () => onSearch(search);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setSearch(event.target.value);

  return (
    <div className="app-search-field">
      <TextField 
        className="app-search-field__input" 
        label="Search field" 
        type="search" 
        onChange={ handleInputChange }
      />

      <Button className="app-search-field__button" variant="contained" onClick={ handleClick }>
        <SearchIcon />
      </Button>
    </div>
  );
};