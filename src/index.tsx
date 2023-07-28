import React from 'react';
import ReactDOM from 'react-dom/client';

import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

import { router } from './core/router';
import { RouterProvider } from 'react-router-dom';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query {viewer { login }
      }
    `,
  })
  .then((result) => console.log(result));


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ApolloProvider client={ client }>
      <RouterProvider router={ router } />
    </ApolloProvider>
  </React.StrictMode>
);
