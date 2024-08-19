import "server-only";
import SectionWrapper from "@/components/general/SectionWrapper";
import FeatureImagePreview, { Feature, FeatureImagePreviewProps } from "@/components/homepage/FeatureImagePreview";
import { UserIcon, MusicalNoteIcon, PhotoIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Suspense } from "react";
import { Stats } from "../components/homepage/Stats";
import { StatsSkeleton } from "../components/homepage/StatsSkeleton";
import { Waves } from "../components/homepage/Waves";

// TODO: check performance diff between defining this here and importing it
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

// TODO: check performance diff between defining this here and importing it
const featurePreview: FeatureImagePreviewProps = {
	features: features,
	subtitle: "Level up your chat experience",
	title: "Main Features",
	description:
		"Bento is a Discord bot that offers a variety of features to enhance your server experience. It contains a lot of fun and useful commands that will make your server more enjoyable. Small features such as the ability to check the weather, set a reminder, or look up an Urban Dictionary definition, but also",
	right: true,
};

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
				<Waves />
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
