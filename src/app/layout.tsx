import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/util/ThemeProvider";
import Navigation from "@/components/general/navigation/Navigation";
import Footer from "@/components/general/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head />
			<body className={inter.className}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<header>
						<Navigation />
					</header>
					<main>
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
