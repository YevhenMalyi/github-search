import { useFavorites } from 'features/repository/hooks';
import { RepositoryListItem } from '../repository-list-item';
import { FavoriteButton } from 'shared/components';

import './FavoritesList.css';

export const FavoritesList = () => {
  const { favorites, handleFavoritesClick, isFavorite } = useFavorites();

  return (
    <div className="app-repository-list">
      { favorites.map(repo => 
        <RepositoryListItem 
          repo={ repo } 
          key={ repo.id } 
          additionalActions={
            <FavoriteButton 
              isFavorite={ isFavorite(repo) }
              handleClick={ () => handleFavoritesClick(repo) }
            />
          }
        />)
      }
    </div>
  );
};