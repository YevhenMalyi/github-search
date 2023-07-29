export interface ISearchPageInfo {
  hasNextPage: boolean,
  endCursor: string,
};

export interface ISearchRepo {
  id: string,
  name: string,
  descrption: string,
  updatedAt: string,
  url: string,
  owner: {
    login: string,
  }
};

export interface ISearchSchema {
  search: {
    pageInfo: ISearchPageInfo,
    repositoryCount: number,
    repos: {
      repo: ISearchRepo
    }[],
  }
};