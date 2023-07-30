import { CircularProgress } from '@mui/material';
import { FavoriteButton, SearchField } from 'shared/components';
import { useFavorites, useSearch } from 'features/repository/hooks';
import { RepositoryListItem } from '../repository-list-item';

import './SearchList.css';

export const SearchList = () => {
  const { handleFavoritesClick, isFavorite } = useFavorites();
  const { onSearch, repos, isLoading, isSearchEmpty, isNoResults } = useSearch();

  const getList = () => repos?.map(repo => 
    <RepositoryListItem 
      repo={ repo } 
      key={ repo.id } 
      additionalActions={
        <FavoriteButton 
          isFavorite={ isFavorite(repo) }
          handleClick={ () => handleFavoritesClick(repo) }
        />
      }
    />
  );

  const getStatus = () => {
    if (isSearchEmpty) {
      return <h2>Start browsing repositories by typing inside search field</h2>;
    }
    if (isNoResults) {
      return <h2>No results. Try another search text</h2>
    }
    if (isLoading) {
      return <CircularProgress />;
    }
  };

  return (
    <div className="app-search-list">
      <SearchField onSearch={ onSearch }/>

      { getStatus() }
      { getList() }
    </div>
  );
};