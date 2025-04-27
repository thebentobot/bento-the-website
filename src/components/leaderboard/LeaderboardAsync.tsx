import LeaderboardParent from "@/components/leaderboard/LeaderboardParent";
import { Fragment } from "react";
import Image from "next/image";
import { fetchLeaderboardUsers } from "@/lib/api/fetch";

export interface LeaderboardRankingsInterface {
	rank: number;
	level: number;
	xp: number;
	userID: bigint;
	avatarURL?: string;
	username: string;
	discriminator: string;
}

export interface userRankingsInterface {
	users: LeaderboardRankingsInterface[];
}

export const LeaderboardAsync = async ({ serverId }: { serverId?: string }) => {
	const rankings = await fetchLeaderboardUsers(serverId);

	return (
		<Fragment>
			<h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight dark:text-white text-black sm:text-4xl text-center">
				Leaderboard for {rankings?.guildName ?? "Bento"}
			</h1>
			{serverId && rankings?.icon && (
				<div className="bg-gray-900/50 mx-auto my-auto p-2 mt-8 w-64 rounded-sm shadow-lg">
					<Image width={256} height={256} className="mx-auto shadow-lg" src={rankings.icon} alt={"Server Icon"} />
				</div>
			)}
			<div className="max-w-(--breakpoint-2xl) mx-auto px-3 pt-2">
				<LeaderboardParent users={rankings.users} />
			</div>
		</Fragment>
	);
};
