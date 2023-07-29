import { RepositoryList } from 'features/repository/components';
import { SearchField } from 'features/search/components';

export const SearchPage = () => {
  return (
    <div className="search-page">
      <SearchField />

      <RepositoryList />
    </div>
  );
};