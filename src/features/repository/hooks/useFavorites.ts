import { ActionTypes, StoreActions, useStore } from 'core/store/FavoritesStore';
import { ISearchRepo } from '../types';

export const useFavorites = () => {
  const { favorites } = useStore();

  const isFavorite = (repo: ISearchRepo) => !!favorites.find(favorite => favorite.id === repo.id);

  const handleFavoritesClick = (repo: ISearchRepo) => isFavorite(repo)
    ? StoreActions[ActionTypes.REMOVE](repo)
    : StoreActions[ActionTypes.ADD](repo);

  const setRating = (repo: ISearchRepo, value: number | null) => {
    StoreActions[ActionTypes.SET_RATING](repo, value);
  };

  return {
    favorites,
    isFavorite,
    handleFavoritesClick,
    setRating,
  }
};