import { gql } from '@apollo/client';

export const GET_SEARCHED_REPOS = gql`
  query Repos($query: String!, $before: String){
    search(
      type: REPOSITORY, 
      first: 10, 
      query: $query,
      before: $before
    ) {
      repositoryCount
      pageInfo {
        hasNextPage
        endCursor
      }
      repos: edges {
        repo: node {
          ... on Repository {
            id
            name
            description
            owner {
              login
            }
            updatedAt
            url
          }
        }
      }
    }
  }
`; 