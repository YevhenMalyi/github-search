import { useFavorites } from 'features/repository/hooks';
import { RepositoryListItem } from '../repository-list-item';
import { FavoriteButton, CustomRating } from 'shared/components';

import './FavoritesList.css';

export const FavoritesList = () => {
  const { favorites, handleFavoritesClick, isFavorite, setRating } = useFavorites();

  return (
    <div className="app-repository-list">
      { favorites.map(repo => 
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
        />)
      }
    </div>
  );
};