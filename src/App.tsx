import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import { Navigation } from 'layout';
import { FavoritesPage, SearchPage } from 'pages';
import { apolloClient } from 'core/apollo-config';

import './styles.css';

export const App = () => {
  return (
    <ApolloProvider client={ apolloClient }>
      <BrowserRouter>
        <Navigation />
        
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path=":id" element={<FavoritesPage />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
};
