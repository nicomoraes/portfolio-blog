import Image from "next/image";

const SIZES = {
  sm: 150,
  md: 300,
  lg: 500,
};

type Sizestype = keyof typeof SIZES;

interface IllustrationImageProps {
  imagePath: string;
  size: Sizestype;
  alt: string;
}

export const IllustrationImage: React.FC<IllustrationImageProps> = ({
  imagePath,
  size,
  alt,
}) => {


  return (
    <div className="flex h-max w-max flex-col items-center justify-center gap-y-2">
      <Image
        src={imagePath}
        width={SIZES[size]}
        height={SIZES[size]}
        alt={alt}
      />
      <a
        href="https://storyset.com/online"
        target="_blank"
        className="text-center text-xs text-foreground/20"
      >
        Online illustrations by Storyset
      </a>
    </div>
  );
};
