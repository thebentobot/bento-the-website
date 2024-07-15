import "./globals.css";
import { Inter } from "next/font/google";
import Navigation from "@/components/general/navigation/Navigation";
import Footer from "@/components/general/Footer";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import { Metadata, Viewport } from "next";

const inter = Inter({ subsets: ["latin"] });

export const siteConfig = {
	name: "Bento",
	url: "https://bentobot.xyz",
	ogImage: "https://bentobot.xyz/bento_discord.webp",
	description:
		"An open-source Discord bot that is designed to be easy to use and easy to host. Bento is a multi-purpose bot that has a variety of features to help you manage your server.",
	links: {
		github: "https://github.com/thebentobot",
	},
};

export type SiteConfig = typeof siteConfig;

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	metadataBase: new URL(siteConfig.url),
	description: siteConfig.description,
	keywords: ["discord", "bot", "bento", "bento bot", "open-source"],
	authors: [
		{
			name: "Christian Krogh Nielsen",
			url: "https://chrkn.dev",
		},
	],
	creator: "Christian Krogh Nielsen",
	openGraph: {
		type: "website",
		locale: "en_GB",
		url: siteConfig.url,
		title: siteConfig.name,
		description: siteConfig.description,
		siteName: siteConfig.name,
		images: [
			{
				url: siteConfig.ogImage,
				width: 128,
				height: 128,
				alt: siteConfig.name,
			},
		],
	},
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
	manifest: `${siteConfig.url}/site.webmanifest`,
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body className={`${inter.className} dark:bg-black bg-white`}>
				<ThemeProvider defaultTheme="system" attribute="class" enableSystem>
					<main>
						<Navigation />
						{children}
					</main>
					<footer>
						<Footer />
					</footer>
				</ThemeProvider>
			</body>
		</html>
	);
}
