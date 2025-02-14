"use client";
import { rankStyles } from "./PatreonAvatar";

export const PatreonAvatarSkeleton = ({ rank }: { rank: keyof typeof rankStyles }) => {
	const style = rankStyles[rank];
	return (
		<div>
			<li
				className={`transition duration-300 ease-in-out dark:bg-zinc-900 bg-zinc-100 flex flex-wrap items-center ${style.width} my-4 px-4 rounded-lg shadow-sm overflow-hidden`}
			>
				<div className="shrink-0 truncate text-left py-5 animate-pulse">
					<div
						className="rounded-full inline-block mx-4 dark:bg-zinc-700 bg-zinc-300 animate-pulse"
						style={{ width: style.avatarWidth, height: style.avatarHeight }}
					/>
				</div>
				<div className="grow p-4 w-full md:w-auto overflow-hidden animate-pulse">
					<div className={`dark:bg-zinc-700 bg-zinc-300 h-6 ${style.textSize} rounded-md`} />
				</div>
			</li>
		</div>
	);
};
