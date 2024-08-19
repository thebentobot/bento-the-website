"use client";
import Image from "next/image";
import { useState } from "react";
import { LeaderboardRankingsInterface } from "./LeaderboardAsync";

const rankToNumber = (rank: number) => {
	switch (rank) {
		case 1:
			return {
				color: "#FFD700",
				fontWeight: 1000,
			};
		case 2:
			return {
				color: "#C0C0C0",
				fontWeight: 700,
			};
		case 3:
			return {
				color: "#CD7F32",
				fontWeight: 500,
			};
		default:
			return {};
	}
};

export default function LeaderboardChild({
	rank,
	level,
	xp,
	username,
	discriminator,
	avatarURL,
}: LeaderboardRankingsInterface) {
	const [avatar, setAvatar] = useState(avatarURL);

	const rankNumber = Number(rank);
	const topUsersStyle = rankToNumber(rankNumber);

	const discriminatorAvatar = Number(discriminator) % 5;
	const percent = (xp / (level * level * 100)) * 100;
	const truncatedDiscriminator = ("0000" + discriminator).slice(-4);
	const messagesToNextLevel = Math.round((level * level * 100 - xp) / 46);

	return (
		<li className="transition duration-300 ease-in-out dark:bg-zinc-900 bg-zinc-100 flex items-center w-full my-4 p-2 px-4 rounded-lg group hover:bg-zinc-200 dark:hover:bg-zinc-800 shadow overflow-hidden">
			<div className="flex-shrink-0 w-72 truncate dark:text-zinc-700 text-zinc-100 text-left">
				<div className="transition duration-300 ease-in-out inline-block dark:bg-zinc-800 bg-zinc-200 px-2 py-1 rounded-md dark:group-hover:bg-zinc-900 group-hover:bg-zinc-300">
					<span
						className="transition duration-300 ease-in-out dark:text-zinc-400 dark:group-hover:text-zinc-400 text-zinc-950 group-hover:text-zinc-950 bg-clip-text"
						style={topUsersStyle}
					>
						{rankNumber}
					</span>
				</div>
				<Image
					className="w-16 rounded-full inline-block mx-4 whitespace-nowrap overflow-hidden"
					src={avatar ?? `https://cdn.discordapp.com/embed/avatars/${discriminatorAvatar}.png`}
					alt={`${username}'s Avatar`}
					style={{ textIndent: "100%" }}
					width={64}
					height={64}
					onError={() => setAvatar(`https://cdn.discordapp.com/embed/avatars/${discriminatorAvatar}.png`)}
				/>
				<span
					title={username + `#${truncatedDiscriminator}`}
					className="transition duration-300 ease-in-out text-zinc-400 group-hover:text-zinc-400"
				>
					<span className="transition duration-300 ease-in-out dark:text-zinc-200 dark:group-hover:text-white text-zinc-800 group-hover:text-black">
						{username}
					</span>
					<span>#{truncatedDiscriminator}</span>
				</span>
			</div>

			<div className="flex-grow p-4 w-full md:w-auto overflow-hidden">
				<div className="max-lg:hidden transition duration-1000 ease-in-out dark:text-white text-black text-left opacity-0 group-hover:opacity-100 overflow-hidden">
					{messagesToNextLevel} messages to level {level + 1}
				</div>
				<div
					title={`${messagesToNextLevel} messages to level ${level + 1}`}
					className="transition duration-300 ease-in-out mt-1 mb-1 w-full h-1 dark:bg-zinc-700 dark:group-hover:bg-zinc-500 bg-zinc-300 group-hover:bg-zinc-400 rounded overflow-hidden"
				>
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
