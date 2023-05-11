import { Post } from "@/types/post";
import {
  GithubAPIRepositoryResponse,
  AppRepository,
  AppRepositoryLanguage,
} from "@/types/repository";

import { formatDate } from "../utils";
import { request } from "./index";

type AllRepositories = Pick<AppRepository, "id" | "name">;

interface CMSData {
  allRepositories: AllRepositories[];
  allPosts: Post[];
}

const QUERY = `query HomePage {
  allRepositories(filter: {show: {eq: "true"}}, orderBy: name_ASC) {
    id
    name
  }
  allPosts(
    filter: {published: {eq: "true"}}
    orderBy: _createdAt_DESC
    first: "4"
  ) {
    id
    title
    slug
    excerpt
    _createdAt
    topics {
      id
      name
      fontIsLight
      brandColor {
        hex
      }
    }
  }
}`;

export const getHomeData = async () => {
  try {
    const data = await request<CMSData>({
      query: QUERY,
    });

    const posts = data.allPosts.map((post) => {
      post._createdAt = formatDate(post._createdAt);
      return post;
    });

    const repository_promises = data.allRepositories.map((repo) =>
      fetch(`https://api.github.com/repos/nicomoraes/${repo.name}`)
    );

    const fetched_repositories = await Promise.all(
      repository_promises.map(
        async (promise) =>
          await promise
            .then((r) => r.json())
            .then(async (rep_data) => {
              const { id, description, name, languages_url, svn_url } =
                rep_data as GithubAPIRepositoryResponse;

              const languages: AppRepositoryLanguage =
                await getRepositoryLanguages(languages_url);

              return {
                id,
                description,
                name,
                url: svn_url,
                languages,
              } as unknown as AppRepository;
            })
      )
    );
    return { posts, repositories: fetched_repositories };
  } catch (error) {
    console.log(error);
  }
};

const getRepositoryLanguages = async (languages_url: string) => {
  return await fetch(languages_url)
    .then((res) => res.json())
    .then((data) => {
      const total = Object.values<number>(data).reduce(
        (previous, current) => previous + current,
        0
      );

      const languages = Object.keys(data).map((key) => {
        return {
          name: key,
          percentage: ((data[key as keyof typeof data] / total) * 100).toFixed(
            1
          ),
        };
      });

      return languages as unknown as AppRepositoryLanguage;
    });
};
