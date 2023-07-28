import {
  createBrowserRouter,
} from 'react-router-dom';

import { FavoritesPage, SearchPage } from '@pages';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: SearchPage,
  },
  {
    path: '/search',
    Component: FavoritesPage,  
  }
]);