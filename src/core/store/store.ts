import { IRepo } from 'features/repository/types';
import { create } from 'zustand';

export enum ActionTypes {
  ADD = 'favorites/add',
  SET_RATING = 'favorites/set_rating',
  REMOVE = 'favorites/remove',
};

type State = {
  favorites: IRepo[],
};

const initialState: State = {
  favorites: [],
};

export const useStore = create<State>(() => ({
  ...initialState,
}))

export const StoreActions = {
  [ActionTypes.ADD]: (repo: IRepo) => {
    useStore.setState(({ favorites }: State) => { 
      return favorites.find(favorite => repo.id === favorite.id)
        ? {}
        : { favorites: [...favorites, repo] };
    });
  },

  [ActionTypes.SET_RATING]: (repo: IRepo, rating: number | null) => {
    useStore.setState(({ favorites }: State) => {
      return { 
        favorites: favorites.map(favorite => 
          favorite.id === repo.id 
            ? { ...favorite, rating } 
            : favorite
        ),
      };
    });
  },

  [ActionTypes.REMOVE]: (repo: IRepo) => {
    useStore.setState(({ favorites }: State) => { 
      return { favorites: favorites.filter(favorite => favorite.id !== repo.id) };
    });
  },
};