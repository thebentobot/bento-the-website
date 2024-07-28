import "server-only";
import SectionWrapper from "@/components/general/SectionWrapper";
import LeaderboardParent from "@/components/leaderboard/LeaderboardParent";
import prisma from "@/lib/prisma";
import { Fragment, Suspense } from "react";
import { LeaderboardSkeleton } from "@/components/leaderboard/LeaderboardChild";

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

async function LeaderboardAsync() {
	const globalRank: LeaderboardRankingsInterface[] = await prisma.$queryRaw`
    SELECT row_number() over (ORDER BY t.level DESC, t.xp DESC) AS rank, t.level, t.xp, t.username, t.discriminator, t."avatarURL", t."userID"
    FROM "user" AS t
    GROUP BY t.level, t.xp, t.username, t.discriminator, t."avatarURL", t."userID"
    ORDER BY t.level DESC, t.xp DESC
    LIMIT 50;`;

	return (
		<Fragment>
			<h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight dark:text-white text-black sm:text-4xl text-center">
				Leaderboard for Bento
			</h1>
			<div className="max-w-screen-2xl mx-auto px-3 pt-2">
				<LeaderboardParent users={globalRank} />
			</div>
		</Fragment>
	);
}

export default function Page() {
	return (
		<SectionWrapper>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
				<div className="lg:text-center text-center overflow-hidden">
					<Suspense fallback={<LeaderboardParentSkeleton />}>
						<LeaderboardAsync />
					</Suspense>
				</div>
			</div>
		</SectionWrapper>
	);
}
