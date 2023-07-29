import { RouterProvider } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import { Navigation } from 'layout';
import { router } from 'core/router';
import { apolloClient } from 'core/apollo-config';

export const App = () => {
  return (
    <ApolloProvider client={ apolloClient }>
      <Navigation />
      <RouterProvider router={ router } />
    </ApolloProvider>
  );
};
