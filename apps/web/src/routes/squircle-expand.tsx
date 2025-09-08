import { MorphExtendFromList } from "@/components/features";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/squircle-expand")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="h-[calc(100svh-7rem)] flex flex-col overflow-hidden">
      <div className="flex-1"></div>
      <MorphExtendFromList />
    </div>
  );
}
