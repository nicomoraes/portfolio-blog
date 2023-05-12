import { twMerge } from "tailwind-merge";

import { Topic } from "@/types/post";

const TopicBox: React.FC<Topic> = ({ brandColor, fontIsLight, name }) => {
  return (
    <div
      className={twMerge(
        `inline-flex items-center justify-center rounded-md border border-foreground p-2 text-sm font-bold`,
        fontIsLight ? "text-foreground" : "text-background"
      )}
      style={{backgroundColor: brandColor.hex}}
    >
      {name}
    </div>
  );
};

export default TopicBox;
