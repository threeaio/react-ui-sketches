import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/bento-grid")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="h-[900px] p-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2  h-full text-muted-foreground/40 font-mono">
        <div className="rounded-xl relative  row-span-5 bg-muted flex flex-col items-center justify-center text-5xl">
          <span className="text-foreground mb-4 block text-xl absolute top-4 left-4">
            01
          </span>{" "}
          1&times;5
        </div>
        <div className="rounded-xl relative row-span-2 bg-muted flex items-center justify-center text-5xl">
          <span className="text-foreground mb-4 block text-xl absolute top-4 left-4">
            02
          </span>{" "}
          1&times;2
        </div>
        <div className="rounded-xl relative  row-span-2 bg-muted flex items-center justify-center text-5xl">
          <span className="text-foreground mb-4 block text-xl absolute top-4 left-4">
            03
          </span>{" "}
          1&times;2
        </div>
        <div className="rounded-xl  relative row-span-4 bg-muted flex items-center justify-center text-5xl">
          <span className="text-foreground mb-4 block text-xl absolute top-4 left-4">
            04
          </span>{" "}
          1&times;4
        </div>
        <div className="rounded-xl relative row-span-3 col-span-2 bg-muted flex items-center justify-center text-5xl">
          <span className="text-foreground mb-4 block text-xl absolute top-4 left-4">
            05
          </span>{" "}
          2&times;3
        </div>
        <div className="rounded-xl  relative row-span-3 bg-muted flex items-center justify-center text-5xl">
          <span className="text-foreground mb-4 block text-xl absolute top-4 left-4">
            06
          </span>{" "}
          1&times;3
        </div>
        <div className="rounded-xl relative col-span-2 row-span-2 bg-muted flex items-center justify-center text-5xl">
          <span className="text-foreground mb-4 block text-xl absolute top-4 left-4">
            07
          </span>{" "}
          2&times;2
        </div>
        <div className="rounded-xl relative row-span-2 bg-muted flex items-center justify-center text-5xl">
          <span className="text-foreground mb-4 block text-xl absolute top-4 left-4">
            08
          </span>{" "}
          1&times;2
        </div>
      </div>
    </div>
  );
}
