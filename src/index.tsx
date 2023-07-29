import React from 'react';
import ReactDOM from 'react-dom/client';

import { ApolloProvider } from '@apollo/client';

import { router } from 'core/router';
import { apolloClient } from 'core/apollo-config';
import { RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ApolloProvider client={ apolloClient }>
      <RouterProvider router={ router } />
    </ApolloProvider>
  </React.StrictMode>
);
