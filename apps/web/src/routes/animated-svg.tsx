import { AnimatedCheck, AnimatedSmileState } from "@/components/features";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/animated-svg")({
  component: RouteComponent,
});

function RouteComponent() {
  const [isChecked, setIsChecked] = useState(false);
  const [state, setState] = useState<"idle" | "success" | "error">("idle");
  return (
    <div className="flex flex-col items-end justify-center gap-4 max-w-md mx-auto bg-muted p-4 rounded-xl mt-12">
      <div className="flex items-center justify-between w-full mt-6 ">
        <div className="font-medium opacity-50">Bool</div>
        <div>
          <RadioGroup
            value={isChecked ? "true" : "false"}
            className="flex items-center justify-between gap-4"
            onValueChange={(value) =>
              setIsChecked(value === "true" ? true : false)
            }
          >
            <div className="flex items-center justify-center gap-2">
              <RadioGroupItem id="false" value={"false"} />
              <Label htmlFor="false">False</Label>
            </div>
            <div className="flex items-center justify-center gap-2">
              <RadioGroupItem id="true" value={"true"} />
              <Label htmlFor="true">True</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
      <div className="flex items-center justify-between w-full bg-background p-4 rounded-xl">
        <div className="flex items-center justify-center">Animate Check</div>
        <AnimatedCheck isChecked={isChecked} />
      </div>
      <div className="flex items-center justify-between w-full bg-background p-4 rounded-xl">
        <div className="flex items-center justify-center">
          Animate Smile Success
        </div>
        <AnimatedSmileState state={isChecked ? "success" : "idle"} />
      </div>
      <div className="flex items-center justify-between w-full bg-background p-4 rounded-xl">
        <div className="flex items-center justify-center">
          Animate Smile Error
        </div>
        <AnimatedSmileState state={isChecked ? "error" : "idle"} />
      </div>
      <div className="flex items-center justify-between w-full mt-6 ">
        <div className="font-medium opacity-50">State</div>
        <div>
          <RadioGroup
            value={state}
            className="flex items-center justify-between gap-4"
            onValueChange={(value) =>
              setState(value as "idle" | "success" | "error")
            }
          >
            <div className="flex items-center justify-center gap-2">
              <RadioGroupItem value="idle" id="idle" />
              <Label htmlFor="idle">Idle</Label>
            </div>
            <div className="flex items-center justify-center gap-2">
              <RadioGroupItem value="success" id="success" />
              <Label htmlFor="success">Success</Label>
            </div>
            <div className="flex items-center justify-center gap-2">
              <RadioGroupItem value="error" id="error" />
              <Label htmlFor="error">Error</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
      <div className="flex items-center justify-between w-full bg-background p-4 rounded-xl">
        <div className="flex items-center justify-center">Animate Smile</div>
        <AnimatedSmileState state={state} />
      </div>
    </div>
  );
}
