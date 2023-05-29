export interface AppRepository {
  id: number;
  name: string;
  description: string;
  url: string;
  languages: AppRepositoryLanguage[];
  created_at: string;
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
  created_at: string;
}