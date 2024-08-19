import "server-only";
import SectionWrapper from "@/components/general/SectionWrapper";
import Header from "@/components/general/typography/Header";
import Paragraph from "@/components/general/typography/Paragraph";
import { Fragment, Suspense } from "react";
import { PatreonSkeletons } from "../../components/support/PatreonSkeletons";
import { PatreonSupportersAsync } from "../../components/support/PatreonSupportersAsync";

export default function Page() {
	return (
		<Fragment>
			<SectionWrapper>
				<Header>
					Who supports <span className="text-yellow-400">Bento</span>?
				</Header>
				<Suspense fallback={<PatreonSkeletons />}>
					<PatreonSupportersAsync />
				</Suspense>
			</SectionWrapper>
			<SectionWrapper border>
				<Header>
					What do I gain by supporting <span className="text-yellow-400">Bento</span>?
				</Header>
				<Paragraph>
					By supporting Bento, you are an important part of ensuring that the performance of Bento is always stellar,
					the experience is top quality and a joy for thousands of Discord users, and available for free for everyone.{" "}
					<strong>Everyone deserves free essential Discord Server features</strong>.
				</Paragraph>
				<Paragraph>
					Besides the goodwill of helping your community by your appreciated generosity, you will receive{" "}
					<strong>benefits</strong> when using Bento . <br />
				</Paragraph>
				<Paragraph>
					Do you want to be <strong>deeply involved</strong> in the future of Bento ?
					<br />
					Do you want <strong>help and support</strong> with Bento <strong>always at your disposal</strong>?
					<br /> Do you want access to <strong>new Bento features</strong> before anyone else?
					<br /> Or do you simply want <strong>more Bento and XP per message</strong>?
				</Paragraph>
				<Paragraph>Read more about the benefits of supporting on</Paragraph>
				<div className="mt-4 rounded-md">
					<a
						href="https://www.patreon.com/bentobot"
						className="w-48 md:w-56 lg:w-96 mx-auto flex items-center justify-center py-3 border border-transparent text-base font-medium rounded-md text-white bg-patreon hover:bg-patreon hover:text-white md:py-4 md:text-lg md:px-10 px-4 sm:px-6 lg:px-8 hover:animate-pulse"
					>
						Patreon
					</a>
				</div>
				<Paragraph>Want to rather give a small tip and receive a Bento for each tip?</Paragraph>
				<div className="mt-4 rounded-md">
					<a
						href="https://ko-fi.com/bentobot"
						className="w-48 md:w-56 lg:w-96 mx-auto flex items-center justify-center py-3 border border-transparent text-base font-medium rounded-md text-white bg-kofi hover:bg-kofi hover:text-white md:py-4 md:text-lg md:px-10 px-4 sm:px-6 lg:px-8 hover:animate-pulse"
					>
						Ko-fi ❤️☕
					</a>
				</div>
				<Paragraph>
					<strong>Want to support for free and receive 5 Bento ? </strong>
				</Paragraph>
				<div className="mt-4 rounded-md">
					<a
						href="https://top.gg/bot/787041583580184609/vote"
						className="w-48 md:w-56 lg:w-96 mx-auto flex items-center justify-center py-3 border border-transparent text-base font-medium rounded-md text-white bg-black dark:text-black dark:bg-white md:py-4 md:text-lg md:px-10 px-4 sm:px-6 lg:px-8 hover:animate-pulse"
					>
						Vote on top.gg
					</a>
				</div>
			</SectionWrapper>
		</Fragment>
	);
}
