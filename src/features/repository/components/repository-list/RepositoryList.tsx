import { useMemo, useState } from 'react';
import { useQuery } from '@apollo/client';

import { GET_SEARCHED_REPOS } from 'features/repository/schemas';
import { ISearchRepo, ISearchSchema } from 'features/repository/types';
import { SearchField } from 'shared/components';
import { RepositoryListItem } from '../repository-list-item';

export const RepositoryList = () => {
  const [searchString, setSearchString] = useState<string>();
  const [startNextPage, setStartNextPage] = useState<string>();

  const { data } = useQuery<ISearchSchema>(GET_SEARCHED_REPOS, {
    variables: {
      query: searchString,
      before: undefined,
    }
  });

  const hasNextPage = useMemo(() => data?.search.pageInfo.hasNextPage, [data]);
  const endCursor = useMemo(() => data?.search.pageInfo.endCursor, [data]);
  const repos = useMemo(() => data?.search.repos.map(
    ({repo}): ISearchRepo => repo), [data]
  );

  console.log(repos, hasNextPage, endCursor);

  const onSearch = (search: string) => {
    setSearchString(search);
  };

  return (
    <div className="repositories-list">
      <SearchField onSearch={ onSearch }/>

      { repos?.map(repo => <RepositoryListItem repo={repo} />)}
    </div>
  );
};