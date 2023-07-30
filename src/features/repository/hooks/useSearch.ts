import { useLazyQuery } from '@apollo/client';
import { useMemo, useState } from 'react';
import { IRepo, ISearchSchema } from '../types';
import { GET_SEARCHED_REPOS } from '../schemas';

export const useSearch = () => {
  const [searchString, setSearchString] = useState<string>('');
  const [repos, setRepos] = useState<IRepo[]>([]);
  
  const [
    getSearchedRepos, { data, loading }
  ] = useLazyQuery<ISearchSchema>(GET_SEARCHED_REPOS);
  
  const hasNextPage = useMemo(() => data?.search.pageInfo.hasNextPage, [data]);
  const endCursor = useMemo(() => data?.search.pageInfo.endCursor, [data]);

  const onSearch = (search: string) => {
    setRepos([]);
    setSearchString(search);
    getSearchedRepos({
      variables: { query: search },
    }).then(response => {
      setRepos(response.data?.search.repos.map(({ repo }): IRepo => repo) || []);
    });
  };

  const loadMore = () => {
    getSearchedRepos({ 
      variables: { query: searchString, before: endCursor },
    }).then(response => {
      const fetchedRepos = response.data?.search.repos.map(({ repo }): IRepo => repo) || []
      setRepos([...repos, ...fetchedRepos]);
    });
  };

  return {
    isLoading: searchString.length && loading,
    isSearchEmpty: searchString.length === 0,
    isNoResults: searchString.length && !loading && repos && repos.length === 0,
    repos,
    hasNextPage,
    onSearch,
    loadMore,
  };
};