import SectionWrapper from "@/components/general/SectionWrapper";
import Header, { SubHeader } from "@/components/general/typography/Header";
import Paragraph from "@/components/general/typography/Paragraph";
import { PatreonAvatarSkeleton } from "@/components/support/PatreonAvatar";
import PatreonSupporters from "@/components/support/PatreonSupporters";
import prisma from "@/lib/prisma";
import { patreon } from "@prisma/client";
import { Fragment, Suspense } from "react";

export interface PatreonWithRank extends patreon {
	rank: number;
}

export interface PatreonsByTier {
	sponsors: PatreonWithRank[];
	disciples: PatreonWithRank[];
	enthusiasts: PatreonWithRank[];
	followers: PatreonWithRank[];
	supporters: PatreonWithRank[];
}

function assignDynamicRanks(patreons: patreon[]): PatreonWithRank[] {
	const tierPresence = {
		sponsor: false,
		disciple: false,
		enthusiast: false,
		follower: false,
		supporter: false,
	};

	patreons.forEach((patreon) => {
		if (patreon.sponsor) tierPresence.sponsor = true;
		if (patreon.disciple) tierPresence.disciple = true;
		if (patreon.enthusiast) tierPresence.enthusiast = true;
		if (patreon.follower) tierPresence.follower = true;
		if (patreon.supporter) tierPresence.supporter = true;
	});

	const activeTiers = Object.keys(tierPresence).filter((tier) => tierPresence[tier as keyof typeof tierPresence]);
	const tierRankMap = activeTiers.reduce<Record<string, number>>((map, tier, index) => {
		map[tier] = index + 1;
		return map;
	}, {});

	return patreons.map((patreon) => {
		let rank = activeTiers.length; // Default to the last rank if none of the flags are true
		if (patreon.sponsor) rank = tierRankMap["sponsor" as keyof typeof tierRankMap];
		else if (patreon.disciple) rank = tierRankMap["disciple" as keyof typeof tierRankMap];
		else if (patreon.enthusiast) rank = tierRankMap["enthusiast" as keyof typeof tierRankMap];
		else if (patreon.follower) rank = tierRankMap["follower" as keyof typeof tierRankMap];
		else if (patreon.supporter) rank = tierRankMap["supporter" as keyof typeof tierRankMap];
		return { ...patreon, rank };
	});
}

function groupUsersByTier(users: PatreonWithRank[]) {
	const categorizedUsers: PatreonsByTier = {
		sponsors: [],
		disciples: [],
		enthusiasts: [],
		followers: [],
		supporters: [],
	};

	users.forEach((user) => {
		if (user.sponsor) {
			categorizedUsers.sponsors.push(user);
		} else if (user.disciple) {
			categorizedUsers.disciples.push(user);
		} else if (user.enthusiast) {
			categorizedUsers.enthusiasts.push(user);
		} else if (user.follower) {
			categorizedUsers.followers.push(user);
		} else if (user.supporter) {
			categorizedUsers.supporters.push(user);
		}
	});

	Object.keys(categorizedUsers).forEach((category) => {
		categorizedUsers[category as keyof PatreonsByTier].sort((a, b) => {
			return a.name && b.name ? a.name.localeCompare(b.name) : 0;
		});
	});

	return categorizedUsers;
}

function PatreonSkeletons() {
	return (
		<Fragment>
			<div className="max-w-screen-2xl mx-auto px-3 pt-2">
				<SubHeader>Patreon Tier</SubHeader>
				<ul className="block flex-wrap mx-auto text-center">
					<div className="mx-auto inline-block p-1">
						<PatreonAvatarSkeleton rank={1} />
					</div>
					<div className="mx-auto inline-block p-1">
						<PatreonAvatarSkeleton rank={1} />
					</div>
				</ul>
			</div>
			<div className="max-w-screen-2xl mx-auto px-3 pt-2">
				<SubHeader>Patreon Tier</SubHeader>
				<ul className="block flex-wrap mx-auto text-center">
					<div className="mx-auto inline-block p-1">
						<PatreonAvatarSkeleton rank={2} />
					</div>
				</ul>
			</div>
		</Fragment>
	);
}

async function PatreonSupportersAsync() {
	const patreons: patreon[] = await prisma.patreon.findMany();
	const patreonsWithRank: PatreonWithRank[] = assignDynamicRanks(patreons);
	const patreonsByTier = groupUsersByTier(patreonsWithRank);

	return <PatreonSupporters {...patreonsByTier} />;
}

export default function Page() {
	return (
		<Fragment>
			<SectionWrapper>
				<Header>
					Who supports <span className="text-yellow-400">Bento</span>?
				</Header>
				<Suspense fallback={<PatreonSkeletons />}>
					<PatreonSupportersAsync />
				</Suspense>
			</SectionWrapper>
			<SectionWrapper border>
				<Header>
					What do I gain by supporting <span className="text-yellow-400">Bento</span>?
				</Header>
				<Paragraph>
					By supporting Bento, you are an important part of ensuring that the performance of Bento is always stellar,
					the experience is top quality and a joy for thousands of Discord users, and available for free for everyone.{" "}
					<strong>Everyone deserves free essential Discord Server features</strong>.
				</Paragraph>
				<Paragraph>
					Besides the goodwill of helping your community by your appreciated generosity, you will receive{" "}
					<strong>benefits</strong> when using Bento . <br />
				</Paragraph>
				<Paragraph>
					Do you want to be <strong>deeply involved</strong> in the future of Bento ?
					<br />
					Do you want <strong>help and support</strong> with Bento <strong>always at your disposal</strong>?
					<br /> Do you want access to <strong>new Bento features</strong> before anyone else?
					<br /> Or do you simply want <strong>more Bento and XP per message</strong>?
				</Paragraph>
				<Paragraph>Read more about the benefits of supporting on</Paragraph>
				<div className="mt-4 rounded-md">
					<a
						href="https://www.patreon.com/bentobot"
						className="w-48 lg:w-96 mx-auto flex items-center justify-center py-3 border border-transparent text-base font-medium rounded-md text-white bg-patreon hover:bg-patreon hover:text-white md:py-4 md:text-lg md:px-10 px-4 sm:px-6 lg:px-8 hover:animate-pulse"
					>
						Patreon
					</a>
				</div>
				<Paragraph>Want to rather give a small tip and receive a Bento for each tip?</Paragraph>
				<div className="mt-4 rounded-md">
					<a
						href="https://ko-fi.com/bentobot"
						className="w-48 lg:w-96 mx-auto flex items-center justify-center py-3 border border-transparent text-base font-medium rounded-md text-white bg-kofi hover:bg-kofi hover:text-white md:py-4 md:text-lg md:px-10 px-4 sm:px-6 lg:px-8 hover:animate-pulse"
					>
						Ko-fi ❤️☕
					</a>
				</div>
				<Paragraph>
					<strong>Want to support for free and receive 5 Bento ? </strong>
				</Paragraph>
				<div className="mt-4 rounded-md">
					<a
						href="https://top.gg/bot/787041583580184609/vote"
						className="w-48 lg:w-96 mx-auto flex items-center justify-center py-3 border border-transparent text-base font-medium rounded-md text-white bg-black dark:text-black dark:bg-white md:py-4 md:text-lg md:px-10 px-4 sm:px-6 lg:px-8 hover:animate-pulse"
					>
						Vote on top.gg
					</a>
				</div>
			</SectionWrapper>
		</Fragment>
	);
}
