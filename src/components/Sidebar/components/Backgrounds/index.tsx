import { Button } from "@/components/ui/button";
import Card from "@/components/Sidebar/components/Backgrounds/Card";

import GenerateAiIcon from "@/assets/icons/generate_AI_icon.png";

const backgrounds = [
  {
    isLoading: true,
  },
  {
    name: "bg_1",
    isDefault: true,
  },
  {
    name: "bg_2",
  },
  {
    name: "bg_3",
    isHovered: true,
  },
];

function Backgrounds() {
  return (
    <div className="grid gap-9.25">
      <Button className="h-12 w-full cursor-pointer gap-1.5 rounded-3xl">
        <img
          src={GenerateAiIcon}
          alt="GenerateAiIcon"
          className="h-5 w-5 object-contain"
        />
        Generate BG for 1 credit
      </Button>
      <div className="grid gap-2.5">
        <h3 className="text-sm">Your backgrounds</h3>
        <div className="grid grid-cols-3 gap-3">
          {backgrounds.map((backgroundData, i) => (
            <Card key={i} data={backgroundData} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Backgrounds;
