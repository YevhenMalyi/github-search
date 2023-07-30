import { useQuery } from '@apollo/client';
import { useMemo, useState } from 'react';
import { ISearchRepo, ISearchSchema } from '../types';
import { GET_SEARCHED_REPOS } from '../schemas';

export const useSearch = () => {
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

  return {
    repos,
    onSearch,
  };
};