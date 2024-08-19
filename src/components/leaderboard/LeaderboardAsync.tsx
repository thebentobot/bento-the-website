import LeaderboardParent from "@/components/leaderboard/LeaderboardParent";
import prisma from "@/lib/prisma";
import { Prisma, PrismaPromise } from "@prisma/client";
import { Fragment } from "react";
import Image from "next/image";

export interface LeaderboardRankingsInterface {
	rank: bigint;
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

const queryServerLeaderboard = (serverId: string): PrismaPromise<LeaderboardRankingsInterface[]> => {
	let query: any;
	query = Prisma.sql`SELECT row_number() over (ORDER BY t.level DESC, t.xp DESC) as rank, t.level, t.xp, u.username, u.discriminator, t."avatarURL", t."userID"
    FROM "guildMember" AS t
    INNER JOIN "user" u on u."userID" = t."userID"
    WHERE t."guildID" = $1
    GROUP BY t.level, t.xp, u.username, u.discriminator, t."avatarURL", t."userID"
    ORDER BY t.level DESC, t.xp DESC
    LIMIT 50;`;
	const inputString = BigInt(serverId);
	query.values = [inputString];
	return prisma.$queryRaw(query);
};

export const LeaderboardAsync = async ({ serverId }: { serverId?: string }) => {
	const rankings: LeaderboardRankingsInterface[] = serverId
		? await queryServerLeaderboard(serverId)
		: await prisma.$queryRaw`
    SELECT row_number() over (ORDER BY t.level DESC, t.xp DESC) AS rank, t.level, t.xp, t.username, t.discriminator, t."avatarURL", t."userID"
    FROM "user" AS t
    GROUP BY t.level, t.xp, t.username, t.discriminator, t."avatarURL", t."userID"
    ORDER BY t.level DESC, t.xp DESC
    LIMIT 50;`;

	const guildData = serverId
		? await prisma.guild.findFirst({
				where: {
					guildID: BigInt(serverId),
				},
			})
		: null;

	return (
		<Fragment>
			<h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight dark:text-white text-black sm:text-4xl text-center">
				Leaderboard for {guildData?.guildName ?? "Bento"}
			</h1>
			{serverId && guildData?.icon && (
				<div className="bg-gray-900 mx-auto my-auto p-2 mt-8 w-64 rounded shadow-lg bg-opacity-50">
					<Image width={256} height={256} className="mx-auto shadow-lg" src={guildData.icon} alt={"Server Icon"} />
				</div>
			)}
			<div className="max-w-screen-2xl mx-auto px-3 pt-2">
				<LeaderboardParent users={rankings} />
			</div>
		</Fragment>
	);
};
