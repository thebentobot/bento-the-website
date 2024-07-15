import "server-only";
import SectionWrapper from "@/components/general/SectionWrapper";
import LeaderboardParent from "@/components/leaderboard/LeaderboardParent";
import prisma from "@/lib/prisma";
import { Fragment, Suspense } from "react";
import { LeaderboardSkeleton } from "@/components/leaderboard/LeaderboardChild";
import { LeaderboardRankingsInterface } from "../page";
import Image from "next/image";
import { Prisma, PrismaPromise } from "@prisma/client";

function LeaderboardParentSkeleton() {
	return (
		<Fragment>
			<h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight dark:text-white text-black sm:text-4xl text-center">
				Loading Leaderboard
			</h1>
			<div className="max-w-screen-2xl mx-auto px-3 pt-2">
				<ul className="relative">
					{Array.from({ length: 50 }).map((_, i) => (
						<div key={i} className="shadow-lg">
							<LeaderboardSkeleton />
						</div>
					))}
				</ul>
			</div>
		</Fragment>
	);
}

function queryServerLeaderboard(serverId: string): PrismaPromise<LeaderboardRankingsInterface[]> {
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
}

async function LeaderboardAsync({ serverId }: { serverId: string }) {
	const globalRank = await queryServerLeaderboard(serverId);
	const guildData = await prisma.guild.findFirst({
		where: {
			guildID: BigInt(serverId),
		},
	});

	return (
		<Fragment>
			<h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight dark:text-white text-black sm:text-4xl text-center">
				Leaderboard for {guildData?.guildName}
			</h1>
			{guildData?.icon && (
				<div className="bg-gray-900 mx-auto my-auto p-2 mt-8 w-64 rounded shadow-lg bg-opacity-50">
					<Image width={256} height={256} className="mx-auto shadow-lg" src={guildData.icon} alt={"Server Icon"} />
				</div>
			)}
			<div className="max-w-screen-2xl mx-auto px-3 pt-2">
				<LeaderboardParent users={globalRank} />
			</div>
		</Fragment>
	);
}

export default function Page({ params }: { params: { id: string } }) {
	return (
		<SectionWrapper>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
				<div className="lg:text-center text-center overflow-hidden">
					<Suspense fallback={<LeaderboardParentSkeleton />}>
						<LeaderboardAsync serverId={params.id} />
					</Suspense>
				</div>
			</div>
		</SectionWrapper>
	);
}
