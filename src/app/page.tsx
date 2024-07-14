import SectionWrapper from "@/components/general/SectionWrapper";
import FeatureImagePreview, { Feature, FeatureImagePreviewProps } from "@/components/homepage/FeatureImagePreview";
import prisma from "@/lib/prisma";
import { UserIcon, MusicalNoteIcon, PhotoIcon } from "@heroicons/react/24/outline";
import { guild } from "@prisma/client";
import Link from "next/link";
import { Suspense } from "react";

const features: Feature[] = [
	{
		name: "Custom Profiles",
		description:
			"Show off your personality with a custom profile. You can set your own background picture or colour, bio description, show what music you listen to, your birthday and time at your current location. Do small customisations via commands on Discord or use the Bento web dashboard for more advanced customisation (coming soon™️).",
		icon: UserIcon,
	},
	{
		name: "Last.fm Integration",
		description:
			"Show off your music taste with Last.fm. You can show your top artists, albums and tracks for any given period, your recent tracks, and what you're currently listening to.",
		icon: MusicalNoteIcon,
	},
	{
		name: "Tags storage",
		description:
			"Store your favourite images, gifs, links, and videos in Bento. Access them again when needed, for sharing a funny moment that happened a month ago or to show useful information. Can't recall what a tag was called? You can search for it by name or author. If you are bored you can also get a random tag or a list of the most popular tags on the server.",
		icon: PhotoIcon,
	},
];

const featurePreview: FeatureImagePreviewProps = {
	features: features,
	subtitle: "Level up your chat experience",
	title: "Main Features",
	description:
		"Bento is a Discord bot that offers a variety of features to enhance your server experience. It contains a lot of fun and useful commands that will make your server more enjoyable. Small features such as the ability to check the weather, set a reminder, or look up an Urban Dictionary definition, but also",
	right: true,
};

const FormatThousands = (x: number): string => Math.floor(x / 100) / 10.0 + "k";

async function Stats() {
	const guilds: guild[] = await prisma.guild.findMany();
	const users = FormatThousands(
		guilds.reduce((acc, guild) => acc + (guild.memberCount === null ? 1 : guild.memberCount), 0),
	);
	const servers = guilds.length - 6;
	return (
		<div className="mt-10 pb-1">
			<div className="relative">
				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="max-w-4xl mx-auto">
						<dl className="sm:grid sm:grid-cols-3">
							<div className="flex flex-col  p-6 text-center ">
								<dt className="order-2 mt-2 text-lg leading-6 font-medium dark:text-white text-black">Servers</dt>
								<dd className="order-1 text-5xl font-extrabold dark:text-white text-black">{servers}</dd>
							</div>
							<div className="flex flex-col p-6 text-center ">
								<dt className="order-2 mt-2 text-lg leading-6 font-medium dark:text-white text-black">Users</dt>
								<dd className="order-1 text-5xl font-extrabold dark:text-white text-black">{users}</dd>
							</div>
							<div className="flex flex-col p-6 text-center">
								<dt className="order-2 mt-2 text-lg leading-6 font-medium dark:text-white text-black">
									Serving the first Bento
								</dt>
								<dd className="order-1 text-5xl font-extrabold dark:text-white text-black">Aug 2021</dd>
							</div>
						</dl>
					</div>
				</div>
			</div>
		</div>
	);
}

function StatsSkeleton() {
	return (
		<div className="mt-10 pb-1">
			<div className="relative">
				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="max-w-4xl mx-auto">
						<dl className="sm:grid sm:grid-cols-3">
							<div className="flex flex-col  p-6 text-center ">
								<dt className="order-2 mt-2 text-lg leading-6 font-medium dark:text-white text-black">Servers</dt>
								<div className="flex space-x-2 justify-center items-center h-12">
									<span className="sr-only">Loading...</span>
									<div className="h-6 w-6 dark:bg-white bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
									<div className="h-6 w-6 dark:bg-white bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
									<div className="h-6 w-6 dark:bg-white bg-black rounded-full animate-bounce"></div>
								</div>
							</div>
							<div className="flex flex-col p-6 text-center ">
								<dt className="order-2 mt-2 text-lg leading-6 font-medium dark:text-white text-black">Users</dt>
								<div className="flex space-x-2 justify-center items-center h-12">
									<span className="sr-only">Loading...</span>
									<div className="h-6 w-6 dark:bg-white bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
									<div className="h-6 w-6 dark:bg-white bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
									<div className="h-6 w-6 dark:bg-white bg-black rounded-full animate-bounce"></div>
								</div>
							</div>
							<div className="flex flex-col p-6 text-center">
								<dt className="order-2 mt-2 text-lg leading-6 font-medium dark:text-white text-black">
									Serving the first Bento
								</dt>
								<dd className="order-1 text-5xl font-extrabold dark:text-white text-black">Aug 2021</dd>
							</div>
						</dl>
					</div>
				</div>
			</div>
		</div>
	);
}

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen overflow-hidden">
			<div className="landing-bg w-screen max-w-full h-screen pb-48">
				<SectionWrapper className="">
					<h1 className="text-center transition-colors duration-1000 text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r dark:from-yellow-300 dark:to-yellow-500 from-amber-300 to-amber-500">
						Bento
					</h1>
					<p className="text-center text-black dark:text-zinc-300 text-lg">
						A Discord bot with media and entertainment commands, verified by{" "}
						<span className="text-discordBlue">Discord</span>
					</p>
					<div>
						<div className="hover:bg-yellow-500 bg-yellow-400 w-72 mx-auto rounded-xl flex justify-center transition-colors duration-300 ease-in-out">
							<Link
								className="w-full h-full text-center p-3 rounded-xl"
								href="https://discord.com/api/oauth2/authorize?client_id=787041583580184609&permissions=1644167687254&scope=bot%20applications.commands"
							>
								<span className="text-black font-bold">Add Bento to your server</span>
							</Link>
						</div>
					</div>
					<div>
						<div className="bg-gradient-to-r from-yellow-400 to-amber-400 w-72 mx-auto rounded-xl p-[2px] flex justify-center">
							<div className="dark:bg-black bg-white dark:text-white text-black hover:text-black dark:hover:text-black dark:hover:bg-transparent hover:bg-transparent w-full mx-auto rounded-xl flex justify-center transition-colors duration-300 ease-in-out">
								<Link className="w-full h-full text-center p-3 rounded-xl" href="/#Main Features">
									<span className="font-bold">Check out Bento&apos;s features</span>
								</Link>
							</div>
						</div>
					</div>
				</SectionWrapper>
				<SectionWrapper className="">
					<Suspense fallback={<StatsSkeleton />}>
						<Stats />
					</Suspense>
				</SectionWrapper>
				<div className="absolute bottom-0 w-full">
					<svg
						className="object-cover w-full"
						xmlns="http://www.w3.org/2000/svg"
						preserveAspectRatio="none"
						viewBox="0 0 1920 200"
					>
						<path
							width="100%"
							d="M -0 100.045 L 64 100.045 C 128 100.045 256 100.045 384 84.333 C 512 68.326 640 37.345 768 29.231 C 896 21.117 1024 37.345 1152 52.835 C 1280 68.326 1408 84.554 1536 80.35 C 1664 76.44 1792 52.835 1856 41.033 L 1920 29.231 L 1920 218.068 L -0 218.068 Z"
							opacity="0.49"
							className="dark:fill-black fill-white"
						></path>
						<path
							width="100%"
							d="M 0 49.635 L 64 68.294 C 128 87.303 256 124.094 384 119.714 C 512 115.334 640 68.031 768 40.262 C 896 11.968 1024 3.208 1152 12.23 C 1280 21.603 1408 49.635 1536 68.294 C 1664 87.303 1792 96.063 1856 101.056 L 1920 105.698 L 1920 217.825 L 0 217.825 Z"
							opacity="0.31"
							className="dark:fill-black fill-white"
						></path>
						<path
							width="100%"
							d="M 0 84.4 L 64 89.882 C 128 95.778 256 106.122 384 122.982 C 512 139.222 640 161.978 768 145.118 C 896 128.878 1024 73.022 1152 73.332 C 1280 73.022 1408 128.878 1536 128.568 C 1664 128.878 1792 73.022 1856 45.818 L 1920 18.2 L 1920 216.8 L 0 216.8 Z"
							className="dark:fill-black fill-white"
						></path>
					</svg>
				</div>
			</div>
			<SectionWrapper className="">
				<FeatureImagePreview
					features={featurePreview.features}
					description={featurePreview.description}
					title={featurePreview.title}
					subtitle={featurePreview.subtitle}
					right
				/>
			</SectionWrapper>
		</div>
	);
}
