import { useFavorites } from 'features/repository/hooks';
import { RepositoryListItem } from '../repository-list-item';
import { FavoriteButton, CustomRating } from 'shared/components';

import './FavoritesList.css';

export const FavoritesList = () => {
  const { favorites, handleFavoritesClick, isFavorite, setRating } = useFavorites();

  const getList = () => {
    return favorites.map(repo => 
      <RepositoryListItem 
        repo={ repo } 
        key={ repo.id } 
        additionalActions={
          <div className="d-flex align-center">
            <CustomRating 
              rating={ repo.rating || null }
              setRating={ (value) => setRating(repo, value) }
            />

            <FavoriteButton 
              isFavorite={ isFavorite(repo) }
              handleClick={ () => handleFavoritesClick(repo) }
            />
          </div>
        }
      />
    );
  };

  return (
    <div className="app-favorites-list">
      { favorites.length 
        ? getList()
        : <h2>Your list of favorite repositories is empty</h2>
      }
    </div>
  );
};