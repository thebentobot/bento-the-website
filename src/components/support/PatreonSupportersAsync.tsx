import PatreonSupporters from "@/components/support/PatreonSupporters";
import { fetchPatreonUsers } from "@/lib/api/fetch";
import { PatreonWithRank, assignDynamicRanks, groupUsersByTier } from "@/server/patreon";

export const PatreonSupportersAsync = async () => {
	const patreons = await fetchPatreonUsers();
	const patreonsWithRank: PatreonWithRank[] = assignDynamicRanks(patreons);
	const patreonsByTier = groupUsersByTier(patreonsWithRank);

	return <PatreonSupporters {...patreonsByTier} />;
};
