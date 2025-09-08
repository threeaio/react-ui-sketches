import { Link } from "@tanstack/react-router";

export default function Header() {
  const links = [
    { to: "/", label: "Home" },
    { to: "/squircle-expand", label: "Squircle Expand" },
    { to: "/menu-extend", label: "Menu Extend" },
    { to: "/grid-expand", label: "Grid Expand" },
    { to: "/intact-childs", label: "Intact Childs" },
    { to: "/team-viewer", label: "Team Viewer" },
    { to: "/animated-svg", label: "Animated Svg" },
    { to: "/stateful-button", label: "Stateful Button" },
    { to: "/bento-grid", label: "Bento Grid" },
  ] as const;

  return (
    <div>
      <div className="flex  items-center justify-between h-auto px-4 py-2">
        <nav className="flex gap-4 text-sm flex-wrap">
          {links.map(({ to, label }) => {
            return (
              <Link
                className="rounded-lg px-5 py-3 bg-transparent transition-all duration-300 whitespace-nowrap uppercase font-bold tracking-widest"
                key={to}
                to={to}
                activeProps={{
                  className: "!bg-primary text-primary-foreground",
                }}
              >
                {label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2"></div>
      </div>
    </div>
  );
}
