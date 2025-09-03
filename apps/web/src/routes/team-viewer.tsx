import { TeamViewer } from "@/components/features/team-viewer";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/team-viewer")({
  component: RouteComponent,
});

function RouteComponent() {
  return <TeamViewer />;
}
