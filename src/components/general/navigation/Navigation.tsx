"use client";
import NavigationBar, { navigationRoute } from "./NavigationBar";

const navigationRoutes: navigationRoute[] = [
	{
		name: "Features",
		href: "/features",
		current: false,
	},
	{
		name: "About",
		href: "/about",
		current: false,
	},
	{
		name: "Support",
		href: "/support",
		current: false,
	},
	{
		name: "Leaderboard",
		href: "/leaderboard",
		current: false,
	},
];

function Navigation() {
	return <NavigationBar navigationRoutes={navigationRoutes} />;
}

export default Navigation;
