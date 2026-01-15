import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import LoadingCard from "@/components/Sidebar/components/Backgrounds/LoadingCard";

import Foreground from "@/assets/images/user.png";
import Background from "@/assets/images/bg_1.png";
import LikeIcon from "@/assets/icons/like_icon.png";
import DislikeIcon from "@/assets/icons/dislike_icon.png";

type CardProps = {
  isLoading?: boolean;
  isDefault?: boolean;
  isHovered?: boolean;
};

function Card({ isLoading, isDefault, isHovered }: CardProps) {
  return (
    <div
      className={cn(
        "relative h-49.5 overflow-hidden rounded-xl bg-black",
        isDefault ? "border-2 border-black" : "border-none",
      )}
    >
      {isDefault && (
        <span className="absolute top-1.25 left-1.25 rounded-sm border border-[#0000000D] bg-white pt-0.75 pr-1 pb-px pl-1.25 text-[10px] font-bold">
          DEFAULT
        </span>
      )}
      {isLoading ? (
        <LoadingCard />
      ) : (
        <>
          <img className="h-full w-full object-cover" src={Background} />
          {isHovered ? (
            <div className="absolute bottom-3.75 flex w-full justify-center gap-2">
              <Button className="h-10 cursor-pointer rounded-xl border border-[#FFFFFF33] bg-[#696965] px-2.25 py-0.5">
                <img src={LikeIcon} alt="LikeIcon" className="h-5 w-5" />
              </Button>
              <Button className="h-10 cursor-pointer rounded-xl border border-[#FFFFFF33] bg-[#696965] px-2.25">
                <img src={DislikeIcon} alt="DislikeIcon" className="h-5 w-5" />
              </Button>
            </div>
          ) : (
            <img
              className="absolute top-0 h-full w-full object-cover"
              src={Foreground}
            />
          )}
        </>
      )}
    </div>
  );
}

export default Card;
