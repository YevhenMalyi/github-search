import { useQuery, gql } from '@apollo/client';
import { SearchField } from 'shared/components';

const GET_SCHEMA = gql`
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
            createdAt
            url
          }
        }
      }
    }
  }
`; 

export const RepositoryList = () => {
  const { data } = useQuery(GET_SCHEMA, {
    variables: {
      query: 'test',
      before: 'Y3Vyc29yOjEw'
    }
  });

  const onSearch = (search: string) => {
    console.log(search);
  };

  return (
    <div className="repositories-list">
      <SearchField onSearch={ onSearch }/>
    </div>
  );
};