import { Link } from "@tanstack/react-router";

export default function Header() {
	
	
	const links = [
		{ to: "/", label: "Home" }, 
		{ to: "/squircle-expand", label: "Squircle Expand" },
		{ to: "/menu-extend", label: "Menu Extend" },
		{ to: "/grid-expand", label: "Grid Expand" },
		{ to: "/intact-childs", label: "Intact Childs" }
	] as const;

	return (
		<div>
			<div className="flex flex-row items-center justify-between h-header px-8">
				<nav className="flex gap-4 text-sm">
					{links.map(({ to, label }) => {
						return (
							<Link className="rounded-lg px-4 py-2 bg-transparent transition-all duration-300" key={to} to={to} activeProps={{ className: "!bg-primary text-primary-foreground" }}>
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
