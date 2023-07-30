import { ActionTypes, StoreActions, useStore } from 'core/store';
import { IRepo } from '../types';

export const useFavorites = () => {
  const { favorites } = useStore();

  const isFavorite = (repo: IRepo) => !!favorites.find(favorite => favorite.id === repo.id);

  const handleFavoritesClick = (repo: IRepo) => isFavorite(repo)
    ? StoreActions[ActionTypes.REMOVE](repo)
    : StoreActions[ActionTypes.ADD](repo);

  const setRating = (repo: IRepo, value: number | null) => {
    StoreActions[ActionTypes.SET_RATING](repo, value);
  };

  return {
    favorites,
    isFavorite,
    handleFavoritesClick,
    setRating,
  }
};