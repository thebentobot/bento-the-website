import Link from "next/link";

export default function Footer() {
	return (
		<div className="dark:bg-zinc-900 bg-zinc-100 dark:border-t-slate-800 border-t-slate-200 border-t">
			<footer className="dark:bg-zinc-900 bg-zinc-100 max-w-screen-2xl mx-auto p-4 py-6">
				<div className="flex flex-wrap">
					<div className="w-full md:max-w-1/2 mb-4">
						<p className="dark:text-yellow-400 text-amber-400 font-medium ">Bento</p>
						<p className="dark:dark:text-zinc-300 text-zinc-500">
							Logo drawn by{" "}
							<Link
								href="https://twitter.com/dannalanart"
								target="_blank"
								rel="noreferrer"
								className=" text-blue-400 hover:underline"
							>
								Dan
							</Link>{" "}
						</p>
						<p className="text-sm dark:text-zinc-400 text-zinc-600">
							Source code for the bot licensed{" "}
							<Link
								href="https://github.com/thebentobot/Bento/blob/master/LICENSE"
								target="_blank"
								rel="noreferrer"
								className="hover:underline dark:text-zinc-300 text-zinc-500"
							>
								AGPLv3
							</Link>
							.{" "}
						</p>
						<p className="text-sm dark:text-zinc-400 text-zinc-600">
							Source code for the website licensed{" "}
							<Link
								href="https://github.com/thebentobot/bento-web/blob/master/LICENSE"
								target="_blank"
								rel="noreferrer"
								className="hover:underline dark:text-zinc-300 text-zinc-500"
							>
								AGPLv3
							</Link>
							.{" "}
						</p>
					</div>
					<div className="w-full md:max-w-1/2">
						<p className="text-md uppercase tracking-widest mb1 dark:text-zinc-400 text-zinc-600">Links</p>
						<p>
							<Link href="/changelog" passHref>
								<span className="dark:text-zinc-300 text-zinc-500 hover:text-amber-400 dark:hover:text-yellow-400 hover:underline">
									Changelog
								</span>
							</Link>
							<br />
							<Link href="/terms-of-service" passHref>
								<span className="dark:text-zinc-300 text-zinc-500 hover:text-amber-400 dark:hover:text-yellow-400 hover:underline">
									Terms of Service
								</span>
							</Link>
							<br />
							<Link href="/privacy-policy" passHref>
								<span className="dark:text-zinc-300 text-zinc-500 hover:text-amber-400 dark:hover:text-yellow-400 hover:underline">
									Privacy Policy
								</span>
							</Link>
							<br />
							<Link
								href="https://github.com/thebentobot"
								className="dark:text-zinc-300 text-zinc-500 dark:hover:text-white hover:text-black hover:underline"
							>
								GitHub
							</Link>
							<br />
							<Link
								href="https://discord.gg/dd68WwP"
								className="dark:text-zinc-300 text-zinc-500 hover:text-discordBlue dark:hover:text-discordBlue hover:underline"
							>
								Discord Support Server
							</Link>
							<br />
							<Link
								href="https://www.patreon.com/bentobot"
								className="dark:text-zinc-300 text-zinc-500 hover:text-patreon dark:hover:text-patreon hover:underline"
							>
								Patreon
							</Link>
							<br />
							<Link
								href="https://ko-fi.com/bentobot"
								className="dark:text-zinc-300 text-zinc-500 hover:text-kofi dark:hover:text-kofi hover:underline"
							>
								Ko-fi
							</Link>
							<br />
							<Link
								href="https://top.gg/bot/787041583580184609"
								className="dark:text-zinc-300 text-zinc-500 hover:text-black dark:hover:text-white hover:underline"
							>
								top.gg
							</Link>
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
