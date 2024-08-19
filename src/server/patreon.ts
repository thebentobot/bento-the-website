import { patreon } from "@prisma/client";

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

export const assignDynamicRanks = (patreons: patreon[]): PatreonWithRank[] => {
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
};

export const groupUsersByTier = (users: PatreonWithRank[]) => {
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
};
