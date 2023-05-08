import Link from "next/link";

import { Post } from "@/types/post";

import TopicBox from "./components/TopicBox";

export const PostArticle: React.FC<Post> = ({
  _createdAt,
  excerpt,
  id,
  slug,
  title,
  topics,
}) => {
  return (
    <div>
      <span className="text-foreground/40">{_createdAt}</span>
      <Link href={`/blog/posts/${slug}`} className="w-max">
        <h3 className="w-max text-xl font-bold hover:underline">{title}</h3>
      </Link>
      <p className="font-light">{excerpt}</p>
      <div className="mt-2 flex flex-wrap gap-x-2">
        {topics.map((topic) => (
          <TopicBox key={`key-post-${id}-topic-${topic.id}`} {...topic} />
        ))}
      </div>
    </div>
  );
};
