"use client";

export function LeaderboardChildSkeleton() {
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
