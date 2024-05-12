import SectionWrapper from "@/components/general/SectionWrapper";
import FeatureImagePreview, { Feature, FeatureImagePreviewProps } from "@/components/homepage/FeatureImagePreview";
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const features: Feature[] = [
	{
		name: "Push to deploy.",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
		icon: CloudArrowUpIcon,
	},
	{
		name: "SSL certificates.",
		description: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
		icon: LockClosedIcon,
	},
	{
		name: "Database backups.",
		description: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
		icon: ServerIcon,
	},
];

const featurePreview: FeatureImagePreviewProps = {
	features: features,
	title: "Test",
	subtitle: "Test",
	description: "Test",
	image: "/29.png",
	right: true,
};

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen overflow-hidden">
			<div className="landing-bg w-screen max-w-full">
				<SectionWrapper className="">
					<h1 className="text-center transition-colors duration-1000 text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-400">
						Bento
					</h1>
					<p className="text-center text-zinc-400 text-lg">
						A <span className="text-discordBlue">Discord</span> verified bot with media and entertainment commands.
					</p>
					<div>
						<div className="hover:bg-yellow-500 bg-yellow-400 w-72 mx-auto rounded-xl flex justify-center">
							<Link
								className="w-full h-full text-center p-3 rounded-xl"
								href="https://discord.com/api/oauth2/authorize?client_id=787041583580184609&permissions=1644167687254&scope=bot%20applications.commands"
							>
								<span className="text-black font-bold">Add Bento to your server</span>
							</Link>
						</div>
					</div>
					<div>
						<div className="bg-gradient-to-r from-yellow-400 to-amber-400 w-72 mx-auto rounded-xl p-[2px] flex justify-center">
							<div className="bg-black text-white hover:text-black hover:bg-transparent w-full mx-auto rounded-xl flex justify-center">
								<Link className="w-full h-full text-center p-3 rounded-xl" href="/features">
									<span className="font-bold">Check out Bento&apos;s features</span>
								</Link>
							</div>
						</div>
					</div>
				</SectionWrapper>
				<div className="w-full bottom-0 -z-10">
					<svg
						className="object-cover w-full"
						xmlns="http://www.w3.org/2000/svg"
						preserveAspectRatio="none"
						viewBox="0 0 1920 200"
					>
						<path
							width="100%"
							d="M -0 100.045 L 64 100.045 C 128 100.045 256 100.045 384 84.333 C 512 68.326 640 37.345 768 29.231 C 896 21.117 1024 37.345 1152 52.835 C 1280 68.326 1408 84.554 1536 80.35 C 1664 76.44 1792 52.835 1856 41.033 L 1920 29.231 L 1920 218.068 L -0 218.068 Z"
							fill="rgb(5, 9, 15)"
							opacity="0.49"
						></path>
						<path
							width="100%"
							d="M 0 49.635 L 64 68.294 C 128 87.303 256 124.094 384 119.714 C 512 115.334 640 68.031 768 40.262 C 896 11.968 1024 3.208 1152 12.23 C 1280 21.603 1408 49.635 1536 68.294 C 1664 87.303 1792 96.063 1856 101.056 L 1920 105.698 L 1920 217.825 L 0 217.825 Z"
							fill="rgb(5, 9, 15)"
							opacity="0.31"
						></path>
						<path
							width="100%"
							d="M 0 84.4 L 64 89.882 C 128 95.778 256 106.122 384 122.982 C 512 139.222 640 161.978 768 145.118 C 896 128.878 1024 73.022 1152 73.332 C 1280 73.022 1408 128.878 1536 128.568 C 1664 128.878 1792 73.022 1856 45.818 L 1920 18.2 L 1920 216.8 L 0 216.8 Z"
							fill="rgb(5, 9, 15)"
						></path>
					</svg>
				</div>
				<SectionWrapper className="">
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
		</div>
	);
}
