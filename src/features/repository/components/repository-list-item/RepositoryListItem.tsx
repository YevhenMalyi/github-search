import { ISearchRepo } from 'features/repository/types';

interface IRepositoryListItemProps {
  repo: ISearchRepo,
}

export const RepositoryListItem = ({ repo }: IRepositoryListItemProps) => {
  return (
    <div className="app-repository-item">
      <div className="app-repository-item__top"> { repo.name }</div>
    </div>
  );
};