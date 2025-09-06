import { TeamViewer } from "@/components/features";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/team-viewer")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="px-12">
      <TeamViewer />
    </div>
  );
}
