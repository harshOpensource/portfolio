import { SiNextdotjs } from "@icons-pack/react-simple-icons";
import { HeartIcon } from "lucide-react";

export const FavouriteFramework = () => {
  return (
    <div className="flex flex-col gap-6 rounded-xl p-4 shadow-feature-card dark:shadow-feature-card-dark lg:p-6">
      <div className="flex items-center gap-2">
        <HeartIcon className="size-[18px]" />
        <h2 className="text-sm font-light">Fav. framework</h2>
      </div>
      <div className="flex items-center justify-center h-full">
        <SiNextdotjs size={80} className="text-zinc-800 dark:text-zinc-200" />
      </div>
    </div>
  );
};
