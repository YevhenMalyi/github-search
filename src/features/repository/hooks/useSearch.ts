import { useQuery } from '@apollo/client';
import { useMemo, useState } from 'react';
import { IRepo, ISearchSchema } from '../types';
import { GET_SEARCHED_REPOS } from '../schemas';

export const useSearch = () => {
  const [searchString, setSearchString] = useState<string>('');
  const [startNextPage, setStartNextPage] = useState<string>();
  
  const { data, loading } = useQuery<ISearchSchema>(GET_SEARCHED_REPOS, {
    variables: {
      query: searchString,
      before: startNextPage,
    }
  });
  
  const hasNextPage = useMemo(() => data?.search.pageInfo.hasNextPage, [data]);
  const endCursor = useMemo(() => data?.search.pageInfo.endCursor, [data]);
  const repos = useMemo(() => data?.search.repos.map(
    ({repo}): IRepo => repo), [data]
  );

  const onSearch = (search: string) => {
    setSearchString(search);
  };

  return {
    repos,
    onSearch,
    isLoading: searchString.length && loading,
    isSearchEmpty: searchString.length === 0,
    isNoResults: searchString.length && !loading && repos && repos.length === 0
  };
};