"use client";
import { PatreonWithRank } from "@/app/support/page";
import Image from "next/image";
import { useState } from "react";

const rankStyles = {
	1: { width: "w-96", avatarWidth: 125, avatarHeight: 125, textSize: "text-xl" },
	2: { width: "w-96", avatarWidth: 100, avatarHeight: 100, textSize: "text-lg" },
	3: { width: "w-96", avatarWidth: 75, avatarHeight: 75, textSize: "text-base" },
	4: { width: "w-96", avatarWidth: 50, avatarHeight: 50, textSize: "text-sm" },
	5: { width: "w-96", avatarWidth: 25, avatarHeight: 25, textSize: "text-xs" },
};

// TODO - sync colours with the main component
export const PatreonAvatarSkeleton = ({ rank }: { rank: keyof typeof rankStyles }) => {
	const style = rankStyles[rank];
	return (
		<div>
			<li
				className={` transition duration-300 ease-in-out dark:bg-zinc-900 bg-zinc-300 flex flex-wrap items-center ${style.width} my-4 px-4 rounded-lg shadow overflow-hidden`}
			>
				<div className="flex-shrink-0 truncate text-left py-5 animate-pulse">
					<div
						className="rounded-full inline-block mx-4 dark:bg-zinc-700 bg-zinc-100 animate-pulse"
						style={{ width: style.avatarWidth, height: style.avatarHeight }}
					/>
				</div>
				<div className="flex-grow p-4 w-full md:w-auto overflow-hidden animate-pulse">
					<div className={`dark:bg-zinc-700 bg-zinc-100 h-6 ${style.textSize} rounded-md`} />
				</div>
			</li>
		</div>
	);
};

export default function PatreonAvatar({ id, name, avatar, rank }: PatreonWithRank) {
	const [avatarURL, setAvatarURL] = useState(avatar ?? "");
	const style = rankStyles[rank as keyof typeof rankStyles];
	const username: string = name ?? "";

	return (
		<div>
			<li
				key={id}
				className={`transition duration-300 ease-in-out dark:bg-zinc-900 bg-zinc-300 flex flex-wrap items-center ${style.width} my-4 px-4 rounded-lg group hover:bg-zinc-700 dark:hover:bg-zinc-800 shadow overflow-hidden`}
			>
				<div className="flex-shrink-0 truncate text-left py-5">
					<Image
						width={style.avatarWidth}
						height={style.avatarHeight}
						className={`rounded-full inline-block mx-4 whitespace-nowrap overflow-hidden`}
						src={avatarURL}
						alt={`${name}'s Avatar`}
						onError={() => setAvatarURL(`https://cdn.discordapp.com/embed/avatars/${Number(0) % 5}.png`)}
					/>
				</div>
				<div className="flex-grow p-4 w-full md:w-auto overflow-hidden">
					{username.length > 15 ? (
						<div
							className={`transition duration-1000 ease-in-out text-black dark:text-white text-center lg:text-left overflow-hidden ${style.textSize}`}
						>
							{username}
						</div>
					) : (
						<div
							className={`transition duration-1000 ease-in-out text-black dark:text-white text-center lg:text-left overflow-hidden ${style.textSize}`}
						>
							{username}
						</div>
					)}
				</div>
			</li>
		</div>
	);
}
