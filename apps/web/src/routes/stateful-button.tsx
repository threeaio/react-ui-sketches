import { StatefulButtonShowcase } from "@/components/features";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/stateful-button")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="h-[calc(100svh-var(--height-header))] ">
      <StatefulButtonShowcase />
    </div>
  );
}
