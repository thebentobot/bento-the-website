import NavigationBar, { navigationRoute } from "./NavigationBar";

const navigationRoutes: navigationRoute[] = [
    {
        name: "About",
        href: "/about",
        current: false
    },
    {
        name: "Features",
        href: "/features",
        current: false
    },
    {
        name: "Support",
        href: "/support",
        current: false
    },
    {
        name: "Leaderboard",
        href: "/leaderboard",
        current: false
    },
];

async function Navigation() {
    return (
        <NavigationBar navigationRoutes={navigationRoutes} />
    );
}

export default Navigation;