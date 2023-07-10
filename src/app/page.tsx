import SectionWrapper from "@/components/general/SectionWrapper";
import FeatureImagePreview, { Feature, FeatureImagePreviewProps } from "@/components/homepage/FeatureImagePreview";
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Fragment } from "react";

const features: Feature[] = [
	{
		name: 'Push to deploy.',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
		icon: CloudArrowUpIcon,
	},
	{
		name: 'SSL certificates.',
		description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
		icon: LockClosedIcon,
	},
	{
		name: 'Database backups.',
		description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
		icon: ServerIcon,
	},
]

const featurePreview: FeatureImagePreviewProps = {
	features: features,
	title: "Test",
	subtitle: "Test",
	description: "Test",
	image: "https://tailwindui.com/img/component-images/dark-project-app-screenshot.png",
	right: true
}

export default function Home() {
	return (
		<Fragment>
			<div className="bg-black overflow-hidden">
				<SectionWrapper>
					<h1 className="text-center transition-colors duration-1000 text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-500">
						Bento
					</h1>
					<p className="text-center text-gray-400 text-lg">A Verified <span className="text-discordBlue">Discord</span> bot with media and entertainment commands.</p>
				</SectionWrapper>
				<SectionWrapper>
					<div>
						<Link href="https://discord.com/api/oauth2/authorize?client_id=787041583580184609&permissions=1644167687254&scope=bot%20applications.commands">
							<div className="hover:bg-yellow-500 bg-yellow-400 w-72 mx-auto rounded-xl p-3 flex justify-center">
								<span className="text-black font-bold">Add Bento to your server</span>
							</div>
						</Link>
					</div>
					<div>
						<Link href="/features">
							<div className="bg-gradient-to-r from-yellow-500 to-amber-500 w-72 mx-auto rounded-xl p-[2px] flex justify-center">
								<div className="bg-black text-white hover:text-black hover:bg-transparent w-full mx-auto rounded-xl p-3 flex justify-center">
									<span className="font-bold">Check out Bento's features</span>
								</div>
							</div>
						</Link>
					</div>
				</SectionWrapper>
				<SectionWrapper>
					<FeatureImagePreview
						features={featurePreview.features}
						description={featurePreview.description}
						image={featurePreview.image}
						title={featurePreview.title}
						subtitle={featurePreview.subtitle}
						right
					/>
				</SectionWrapper>
			</div>
		</Fragment>
	);
}
