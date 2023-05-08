import { Topic } from "@/types/post";

const TopicBox: React.FC<Topic> = ({ brandColor, fontIsLight, name }) => {
  const setTextColor =
    fontIsLight === true ? "text-foreground" : "text-background";

  return (
    <div
      className={`inline-flex items-center justify-center rounded-md border border-foreground p-2 text-sm font-bold
      ${setTextColor}
      `}
      style={{ backgroundColor: brandColor.hex }}
    >
      {name}
    </div>
  );
};

export default TopicBox;
