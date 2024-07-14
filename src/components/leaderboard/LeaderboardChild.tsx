import { LeaderboardRankingsInterface } from "@/app/leaderboard/page";
import Image from "next/image";

export function LeaderboardSkeleton() {
	return (
		<li className="animate-pulse transition duration-300 ease-in-out dark:bg-zinc-900 bg-zinc-300 flex flex-wrap items-center w-full my-4 p-2 px-4 rounded-lg group hover:bg-zinc-700 dark:hover:bg-zinc-800 shadow overflow-hidden">
			<div className="flex-shrink-0 w-72 truncate dark:text-zinc-700 text-zinc-100 text-left">
				<div style={{ textIndent: "100%" }} className="w-16 h-16 rounded-full inline-block mx-4 bg-gray-400"></div>
			</div>

			<div className="flex-grow p-4 w-full md:w-auto overflow-hidden">
				<div className="transition duration-1000 ease-in-out dark:text-white text-black text-left opacity-0 group-hover:opacity-100 overflow-hidden"></div>
				<div className="transition duration-300 ease-in-out mt-1 mb-1 w-full h-1 bg-zinc-700 group-hover:bg-zinc-500 rounded overflow-hidden">
					<div
						className="progress-done"
						style={{
							opacity: 0.75,
							width: `0%`,
						}}
					></div>
				</div>
			</div>

			<div className="dark:text-white text-black pl-4 h-20 flex w-full md:w-auto items-center justify-between hover:">
				<div>
					<div className="h-4 w-12 bg-gray-400 rounded mb-2"></div>
					<div className="h-6 w-8 bg-gray-400 rounded"></div>
				</div>
			</div>
		</li>
	);
}

export default function LeaderboardChild({
	rank,
	level,
	xp,
	username,
	discriminator,
	avatarURL,
}: LeaderboardRankingsInterface) {
	const avatar = avatarURL ? avatarURL : `https://cdn.discordapp.com/embed/avatars/${Number(discriminator) % 5}.png`;
	let topUsersStyle = {};
	const rankToNumber = Number(rank);

	switch (rankToNumber) {
		case 1:
			topUsersStyle = {
				color: "#FFD700",
				fontWeight: 1000,
			};
			break;
		case 2:
			topUsersStyle = {
				color: "#C0C0C0",
				fontWeight: 700,
			};
			break;
		case 3:
			topUsersStyle = {
				color: "#CD7F32",
				fontWeight: 500,
			};
			break;
		default:
			topUsersStyle = {};
			break;
	}

	const percent = (xp / (level * level * 100)) * 100;

	return (
		<li className="transition duration-300 ease-in-out dark:bg-zinc-900 bg-zinc-300 flex flex-wrap items-center w-full my-4 p-2 px-4 rounded-lg group hover:bg-zinc-700 dark:hover:bg-zinc-800 shadow overflow-hidden">
			<div className="flex-shrink-0 w-72 truncate dark:text-zinc-700 text-zinc-100 text-left">
				<div className="transition duration-300 ease-in-out inline-block dark:bg-zinc-800 bg-zinc-200 px-2 py-1 rounded-md dark:group-hover:bg-zinc-900 group-hover:bg-zinc-300">
					<span
						className="transition duration-300 ease-in-out dark:text-zinc-400 dark:group-hover:text-zinc-400 text-zinc-950 group-hover:text-zinc-950 bg-clip-text"
						style={topUsersStyle}
					>
						{rankToNumber}
					</span>
				</div>
				<Image
					className="w-16 rounded-full inline-block mx-4 whitespace-nowrap overflow-hidden"
					src={avatar}
					alt={`${username}'s Avatar`}
					style={{ textIndent: "100%" }}
					width={64}
					height={64}
				/>
				<span className="transition duration-300 ease-in-out text-zinc-400 group-hover:text-zinc-400">
					<span className="transition duration-300 ease-in-out dark:text-zinc-200 dark:group-hover:text-white text-zinc-800 group-hover:text-black">
						{username}
					</span>
					<span>#{("0000" + discriminator).slice(-4)}</span>
				</span>
			</div>

			<div className="flex-grow p-4 w-full md:w-auto overflow-hidden">
				<div className="transition duration-1000 ease-in-out dark:text-white text-black text-left opacity-0 group-hover:opacity-100 overflow-hidden">
					{Math.round((level * level * 100 - xp) / 46)} messages to level {level + 1}
				</div>
				<div className="transition duration-300 ease-in-out mt-1 mb-1 w-full h-1 bg-zinc-700 group-hover:bg-zinc-500 rounded overflow-hidden">
					<div
						className="progress-done"
						style={{
							opacity: 0.75,
							width: `${percent}%`,
						}}
					></div>
				</div>
			</div>

			<div className="dark:text-white text-black pl-4 h-20 flex w-full md:w-auto items-center justify-between hover:">
				<div>
					Level
					<br />
					<span className="text-2xl font-medium">{level}</span>
				</div>
			</div>
		</li>
	);
}
