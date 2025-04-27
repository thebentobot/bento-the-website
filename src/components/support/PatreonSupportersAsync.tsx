import PatreonSupporters from "@/components/support/PatreonSupporters";
import { PatreonWithRank, assignDynamicRanks, groupUsersByTier } from "@/server/patreon";

export const PatreonSupportersAsync = async () => {
	const patreons: patreon[] = await prisma.patreon.findMany();
	const patreonsWithRank: PatreonWithRank[] = assignDynamicRanks(patreons);
	const patreonsByTier = groupUsersByTier(patreonsWithRank);

	return <PatreonSupporters {...patreonsByTier} />;
};
