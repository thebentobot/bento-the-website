import Link from "next/link";

export default function Footer() {
	return (
		<div className="bg-zinc-900 border-t-slate-800 border-t">
			<footer className="bg-zinc-900 max-w-screen-2xl mx-auto p-4 py-6">
				<div className="flex flex-wrap">
					<div className="w-full md:max-w-1/2 mb-4">
						<p className="text-yellow-400 font-medium ">Bento</p>
						<p className="text-zinc-300">
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
						<p className="text-sm text-zinc-400">
							Source code for the bot licensed{" "}
							<Link
								href="https://github.com/thebentobot/Bento/blob/master/LICENSE"
								target="_blank"
								rel="noreferrer"
								className="hover:underline"
							>
								AGPLv3
							</Link>
							.{" "}
						</p>
					</div>
					<div className="w-full md:max-w-1/2">
						<p className="text-md uppercase tracking-widest mb1 text-zinc-400">Links</p>
						<p>
							<Link href="/changelog" passHref>
								<span className="text-zinc-300 hover:text-yellow-400">Changelog</span>
							</Link>
							<br />
							<Link href="/terms-of-service" passHref>
								<span className="text-zinc-300 hover:text-yellow-400">Terms of Service</span>
							</Link>
							<br />
							<Link href="/privacy-policy" passHref>
								<span className="text-zinc-300 hover:text-yellow-400">Privacy Policy</span>
							</Link>
							<br />
							<Link href="https://github.com/thebentobot" className="text-zinc-300 hover:text-white">
								GitHub
							</Link>
							<br />
							<Link href="https://discord.gg/dd68WwP" className="text-zinc-300 hover:text-discordBlue">
								Discord Support Server
							</Link>
							<br />
							<Link href="https://www.patreon.com/bentobot" className="text-zinc-300 hover:text-patreon">
								Patreon
							</Link>
							<br />
							<Link href="https://ko-fi.com/bentobot" className="text-zinc-300 hover:text-kofi">
								Ko-fi
							</Link>
							<br />
							<Link href="https://top.gg/bot/787041583580184609" className="text-zinc-300 hover:text-black">
								top.gg
							</Link>
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
