import { SearchField } from 'shared/components';

export const RepositoryList = () => {
  const onSearch = (event: Event) => {
    console.log(event);
  };

  return (
    <div className="repositories-list">
      <SearchField onSearch={ onSearch }/>
    </div>
  );
};