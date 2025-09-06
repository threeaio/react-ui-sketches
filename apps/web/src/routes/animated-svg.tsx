import { AnimatedCheck, AnimatedSmile } from "@/components/features";
import { Button } from "@/components/ui";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/animated-svg")({
  component: RouteComponent,
});

function RouteComponent() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="flex flex-col items-end justify-center gap-4 max-w-md mx-auto bg-muted p-4 rounded-xl mt-12">
      <Button onClick={() => setIsChecked(!isChecked)} size="lg">
        {isChecked ? "Checked" : "Unchecked"}
      </Button>
      <div className="flex items-center justify-between w-full bg-background p-4 rounded-xl">
        <div className="flex items-center justify-center">Animate Check</div>
        <AnimatedCheck isChecked={isChecked} />
      </div>
      <div className="flex items-center justify-between w-full bg-background p-4 rounded-xl">
        <div className="flex items-center justify-center">Animate Smile</div>
        <AnimatedSmile isChecked={isChecked} />
      </div>
    </div>
  );
}
