import { FormatThousands } from "@/utils";

export const Stats = async () => {
	const guilds: guild[] = await prisma.guild.findMany();
	const users = FormatThousands(
		guilds.reduce((acc, guild) => acc + (guild.memberCount === null ? 1 : guild.memberCount), 0),
	);
	const servers = guilds.length - 6;
	return (
		<div className="mt-10 pb-1">
			<div className="relative">
				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="max-w-4xl mx-auto">
						<dl className="sm:grid sm:grid-cols-3">
							<div className="flex flex-col  p-6 text-center ">
								<dt className="order-2 mt-2 text-lg leading-6 font-medium dark:text-white text-black">Servers</dt>
								<dd className="order-1 text-5xl font-extrabold dark:text-white text-black">{servers}</dd>
							</div>
							<div className="flex flex-col p-6 text-center ">
								<dt className="order-2 mt-2 text-lg leading-6 font-medium dark:text-white text-black">Users</dt>
								<dd className="order-1 text-5xl font-extrabold dark:text-white text-black">{users}</dd>
							</div>
							<div className="flex flex-col p-6 text-center">
								<dt className="order-2 mt-2 text-lg leading-6 font-medium dark:text-white text-black">
									Serving the first Bento
								</dt>
								<dd className="order-1 text-5xl font-extrabold dark:text-white text-black">Aug 2021</dd>
							</div>
						</dl>
					</div>
				</div>
			</div>
		</div>
	);
};
