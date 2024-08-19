import { LeaderboardChildSkeleton } from "./LeaderboardChildSkeleton";
import { Fragment } from "react";

export const LeaderboardPageSkeleton = ({ serverId }: { serverId?: string }) => {
	return (
		<Fragment>
			<h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight dark:text-white text-black sm:text-4xl text-center">
				Loading Leaderboard for {serverId ? `Server ID ${serverId}` : "Bento"}
			</h1>
			{serverId && (
				<div className="animate-pulse bg-gray-900 mx-auto my-auto p-2 mt-8 w-64 rounded shadow-lg bg-opacity-50">
					<div className="dark:bg-zinc-700 bg-zinc-300 w-64 h-64 rounded mx-auto"></div>
				</div>
			)}
			<div className="max-w-screen-2xl mx-auto px-3 pt-2">
				<ul className="relative">
					{Array.from({ length: 50 }).map((_, i) => (
						<div key={i} className="shadow-lg">
							<LeaderboardChildSkeleton />
						</div>
					))}
				</ul>
			</div>
		</Fragment>
	);
};
