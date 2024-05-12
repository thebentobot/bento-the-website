import Paragraph from "@/components/general/typography/Paragraph";
import SectionWrapper from "@/components/general/SectionWrapper";
import Link from "next/link";
import { Fragment } from "react";
import Header from "@/components/general/typography/Header";

export default function About() {
	return (
		<Fragment>
			<SectionWrapper>
				<Header>
					About <span className="text-yellow-400">Bento</span>
				</Header>
				<Paragraph>
					Bento is a Discord bot that provides various media and entertainment commands, with a focus on quality
					delivery.
				</Paragraph>
				<Paragraph>
					Bento was started as a project to learn JavaScript and programming in general, and is a project of continuous
					learning and improvement.
				</Paragraph>
				<Paragraph>
					<strong>The goal</strong> for Bento is to create <strong>joy</strong>. Joy for the users by always being
					reliable and deliver commands as expected. Make their chatting experience more fun and easier on Discord.
				</Paragraph>
				<Paragraph>
					The goal for Bento will <strong>never</strong> be to earn money. <br /> Bento is treated as a{" "}
					<strong>non-profit project</strong>, with sponsorship options on{" "}
					<Link
						href="https://www.patreon.com/bentobot"
						target="_blank"
						rel="noreferrer"
						className="text-patreon hover:underline"
					>
						Patreon
					</Link>{" "}
					and{" "}
					<Link
						href="https://ko-fi.com/bentobot"
						target="_blank"
						rel="noreferrer"
						className="text-kofi hover:underline"
					>
						Ko-fi
					</Link>{" "}
					, where the raised funding is spend solely on hosting and improving Bento. If you are interested in reading
					about supporting, then{" "}
					<Link className="text-yellow-400 hover:underline" href="/support">
						Click here!
					</Link>
				</Paragraph>
			</SectionWrapper>
			<SectionWrapper border>
				<Header>
					What powers <span className="text-yellow-400">Bento</span>?
				</Header>
				<Paragraph>
					Bento is written in{" "}
					<Link
						href="https://www.typescriptlang.org/"
						target="_blank"
						rel="noreferrer"
						className="text-typescript hover:underline"
					>
						TypeScript
					</Link>{" "}
					and uses the{" "}
					<Link
						href="https://discord.js.org/#/"
						target="_blank"
						rel="noreferrer"
						className="text-discordBlue hover:underline"
					>
						Discord.js
					</Link>{" "}
					Node.js module that interacts with the{" "}
					<Link
						href="https://discord.com/developers/docs/reference"
						target="_blank"
						rel="noreferrer"
						className="text-discordBlue hover:underline"
					>
						Discord API
					</Link>
					. Bento uses a{" "}
					<Link
						href="https://www.postgresql.org/"
						target="_blank"
						rel="noreferrer"
						className="text-postgresql hover:underline"
					>
						PostgreSQL
					</Link>{" "}
					database with{" "}
					<Link
						href="https://www.prisma.io/"
						target="_blank"
						rel="noreferrer"
						className="dark:text-white text-black hover:underline"
					>
						Prisma
					</Link>
					.
				</Paragraph>
				<Paragraph>
					The Bento website is powered by{" "}
					<Link
						href="https://nextjs.org/"
						target="_blank"
						rel="noreferrer"
						className="dark:text-white text-black hover:underline"
					>
						Next.js
					</Link>{" "}
					and{" "}
					<Link
						href="https://tailwindcss.com/"
						target="_blank"
						rel="noreferrer"
						className="text-tailwindcss hover:underline"
					>
						Tailwind CSS
					</Link>
					.
				</Paragraph>
				<Paragraph>
					All the source code are open-source and available on{" "}
					<Link
						href="https://github.com/thebentobot"
						target="_blank"
						rel="noreferrer"
						className="dark:text-white text-black hover:underline"
					>
						GitHub
					</Link>
					.{" "}
				</Paragraph>
				<Paragraph>
					The development of Bento is <a className="font-bold">most importantly</a> supported by a community of
					supporters and good friends on the{" "}
					<Link
						href="https://discord.gg/dd68WwP"
						target="_blank"
						rel="noreferrer"
						className="text-yellow-400 hover:underline"
					>
						Bento Support Server
					</Link>{" "}
					where ideas, discussion, feedback and bug reporting are happening, besides just chatting. Everyone is welcome
					to join!
				</Paragraph>
				<Paragraph>
					Logo drawn by{" "}
					<Link
						href="https://twitter.com/dannalanart"
						target="_blank"
						rel="noreferrer"
						className=" text-blue-400 hover:underline"
					>
						Dan
					</Link>
					.{" "}
				</Paragraph>
			</SectionWrapper>
		</Fragment>
	);
}
