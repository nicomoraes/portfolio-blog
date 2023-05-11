export interface AppRepository {
  id: number;
  name: string;
  description: string;
  url: string;
  languages: AppRepositoryLanguage[];
}

export type AppRepositoryLanguage = {
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