import { 
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = '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';
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${ token }`
    }
  };
});

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});