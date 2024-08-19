import PatreonSupporters from "@/components/support/PatreonSupporters";
import prisma from "@/lib/prisma";
import { PatreonWithRank, assignDynamicRanks, groupUsersByTier } from "@/server/patreon";
import { patreon } from "@prisma/client";

export const PatreonSupportersAsync = async () => {
	const patreons: patreon[] = await prisma.patreon.findMany();
	const patreonsWithRank: PatreonWithRank[] = assignDynamicRanks(patreons);
	const patreonsByTier = groupUsersByTier(patreonsWithRank);

	return <PatreonSupporters {...patreonsByTier} />;
};
