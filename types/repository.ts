export interface Repository {
  id: number;
  name: string;
  description: string;
  url: string;
  languages: RepositoryLanguage[];
}

export type RepositoryLanguage = {
  name: string;
  percentage: number;
}

export interface GithubAPIRepositoryResponse {
  id: number;
  name: string;
  description: string;
  svn_url: string;
  languages_url: string;
}