import { useMemo, useState } from 'react';
import { useQuery } from '@apollo/client';

import { GET_SEARCHED_REPOS } from 'features/repository/schemas';
import { ISearchRepo, ISearchSchema } from 'features/repository/types';
import { FavoriteButton, SearchField } from 'shared/components';
import { useFavorites } from 'features/repository/hooks';
import { RepositoryListItem } from '../repository-list-item';

import './RepositoryList.css';

export const RepositoryList = () => {
  const { handleFavoritesClick, isFavorite } = useFavorites();
  
  const [searchString, setSearchString] = useState<string>();
  const [startNextPage, setStartNextPage] = useState<string>();
  
  const { data } = useQuery<ISearchSchema>(GET_SEARCHED_REPOS, {
    variables: {
      query: searchString,
      before: startNextPage,
    }
  });
  const hasNextPage = useMemo(() => data?.search.pageInfo.hasNextPage, [data]);
  const endCursor = useMemo(() => data?.search.pageInfo.endCursor, [data]);
  const repos = useMemo(() => data?.search.repos.map(
    ({repo}): ISearchRepo => repo), [data]
  );

  const onSearch = (search: string) => {
    setSearchString(search);
  };

  return (
    <div className="app-repository-list">
      <SearchField onSearch={ onSearch }/>

      { repos?.map(repo => 
        <RepositoryListItem 
          repo={ repo } 
          key={ repo.id } 
          additionalActions={
            <FavoriteButton 
              isFavorite={ isFavorite(repo) }
              handleClick={ () => handleFavoritesClick(repo) }
            />
          }
        />)
      }
    </div>
  );
};