import { GraphQLClient, RawRequestOptions,  } from "graphql-request";

interface Request extends RawRequestOptions {
  includeDrafts?: boolean;
  excludeInvalid?: boolean;
}

type Header = {
  authorization: string;
  "X-Include-Drafts"?: "true" | "false";
  "X-Exclude-Invalid"?: "true" | "false";
};

export function request<T>({
  query,
  variables,
  includeDrafts,
  excludeInvalid,
  
}: Request): Promise<T> {
  const headers: Header = {
    authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
  };
  if (includeDrafts) {
    headers["X-Include-Drafts"] = "true";
  }
  if (excludeInvalid) {
    headers["X-Exclude-Invalid"] = "true";
  }
  const client = new GraphQLClient("https://graphql.datocms.com", { headers });
  return client.request(query, variables);
}
