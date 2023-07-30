export interface ISearchPageInfo {
  hasNextPage: boolean,
  endCursor: string,
};

export interface IRepo {
  id: string,
  name: string,
  description: string,
  updatedAt: string,
  url: string,
  owner: {
    login: string,
  },
  rating?: number | null,
};

export interface ISearchSchema {
  search: {
    pageInfo: ISearchPageInfo,
    repositoryCount: number,
    repos: {
      repo: IRepo
    }[],
  }
};