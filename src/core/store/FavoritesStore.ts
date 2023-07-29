import { create } from 'zustand';

export enum ActionTypes {
  SET = 'favorites/set',
  REMOVE = 'favorites/remove',
};

// type Actions = {
//   [ActionTypes.SET]: (id: number, rating: number) => void,
//   [ActionTypes.REMOVE]: (id: number) => void,
// };

type State = {
  favorites: Map<number, number>,
};

const initialState: State = {
  favorites: new Map(),
};

export const useFavoritesStore = create<State>(() => ({
  ...initialState,
}))

export const FavoritesStoreActions = {
  [ActionTypes.SET]: (id: number, rating: number) => {
    useFavoritesStore.setState(({ favorites }: State) => ({
      favorites: new Map(favorites).set(id, rating),
    }));
  },

  [ActionTypes.REMOVE]: (id: number) => {
    useFavoritesStore.setState(({ favorites }: State) => {
      let updated = new Map(favorites);
      updated.delete(id);
      return {
        favorites: updated,
      };
    });
  },
};