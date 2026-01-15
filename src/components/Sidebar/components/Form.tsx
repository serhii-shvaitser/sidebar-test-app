import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import BackIcon from "@/assets/icons/action_back_icon.png";
import NextIcon from "@/assets/icons/action_next_icon.png";
import RegenerateAiIcon from "@/assets/icons/regenerate_AI_icon.png";

function Form() {
  return (
    <div className="grid gap-3.75">
      <Label htmlFor="background-idea">Background idea</Label>
      <div className="flex min-h-48.75 flex-col justify-between rounded-lg border border-[#F2F4F6] p-4 pb-2 focus-within:ring-1 focus-within:ring-ring">
        <Textarea
          id="background-idea"
          className="min-h-30 w-full resize-none rounded-none border-0 bg-transparent p-0 shadow-none focus-visible:ring-0"
          value="Animate glowing rays pulsating from behind the bottle, leaves gently swaying, and golden sparkles floating upward for a natural, radiant effect."
        />
        <div className="flex justify-between">
          <Button
            variant="ghost"
            className="cursor-pointer gap-0.5 bg-transparent p-0 text-xs hover:bg-transparent"
          >
            <img
              src={RegenerateAiIcon}
              alt="RegenerateAiIcon"
              className="h-5 w-5 object-contain"
            />
            Regenerate
          </Button>
          <div className="flex gap-2.25">
            <Button
              variant="ghost"
              className="cursor-pointer bg-transparent px-1.5 hover:bg-transparent"
            >
              <img
                src={BackIcon}
                alt="BackIcon"
                className="h-5 w-5 object-contain"
              />
            </Button>
            <Button variant="ghost" className="cursor-pointer px-1.5">
              <img src={NextIcon} alt="NextIcon" className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
