import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <h1 className=" mx-auto mt-72 text-8xl font-bold max-w-xl uppercase tracking-wide">
      react ui sketches
    </h1>
  );
}
