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

export const useStore = create<State>(() => ({
  ...initialState,
}))

export const StoreActions = {
  [ActionTypes.SET]: (id: number, rating: number) => {
    useStore.setState(({ favorites }: State) => ({
      favorites: new Map(favorites).set(id, rating),
    }));
  },

  [ActionTypes.REMOVE]: (id: number) => {
    useStore.setState(({ favorites }: State) => {
      let updated = new Map(favorites);
      updated.delete(id);
      return {
        favorites: updated,
      };
    });
  },
};