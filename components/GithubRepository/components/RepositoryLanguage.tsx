import { AppRepositoryLanguage } from "@/types/repository";

export const RepositoryLanguage: React.FC<AppRepositoryLanguage> = ({name, percentage}) => {
  return (
    <div className="flex items-center gap-x-2 font-mono  text-white">
      <div className="h-2 w-2 rounded-full bg-blue-600" style={{backgroundColor: `var(--${name.toLowerCase()})`}} />
      <span>{name}</span>
      <span className="text-foreground/50">{percentage}%</span>
    </div>
  );
}; 
