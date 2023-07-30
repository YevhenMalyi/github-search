import { FavoriteButton, SearchField } from 'shared/components';
import { useFavorites, useSearch } from 'features/repository/hooks';
import { RepositoryListItem } from '../repository-list-item';

import './RepositoryList.css';

export const RepositoryList = () => {
  const { handleFavoritesClick, isFavorite } = useFavorites();
  const { onSearch, repos } = useSearch();

  return (
    <div className="app-repository-list">
      <SearchField onSearch={ onSearch }/>

      { repos?.map(repo => 
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
        )
      }
    </div>
  );
};