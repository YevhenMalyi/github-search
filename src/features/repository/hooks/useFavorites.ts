import { ActionTypes, StoreActions, useStore } from 'core/store/FavoritesStore';
import { ISearchRepo } from '../types';

export const useFavorites = () => {
  const { favorites } = useStore();

  const isFavorite = (repo: ISearchRepo) => !!favorites.find(favorite => favorite.id === repo.id);

  const handleFavoritesClick = (repo: ISearchRepo) => isFavorite(repo)
    ? StoreActions[ActionTypes.REMOVE](repo)
    : StoreActions[ActionTypes.ADD](repo);

  return {
    favorites,
    isFavorite,
    handleFavoritesClick,
  }
};