import { ExtendFromGrid } from "@/components/features/grid-extend/extend-from-grid";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/grid-expand")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="h-[calc(100svh-var(--height-header))] flex flex-col">
      <ExtendFromGrid />
    </div>
  );
}
