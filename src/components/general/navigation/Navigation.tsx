"use client";
import NavigationBar, { navigationRoute } from "./NavigationBar";
import { usePathname } from "next/navigation";

const navigationRoutes: navigationRoute[] = [
	/*
	{
		name: "Features",
		href: "/features",
		current: false,
	},
	*/
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
	const pathname = usePathname();
	navigationRoutes.forEach((route) => {
		route.current = route.href === pathname;
	});
	return <NavigationBar navigationRoutes={navigationRoutes} />;
}

export default Navigation;
