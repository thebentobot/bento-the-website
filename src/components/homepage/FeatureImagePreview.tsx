import { Icon } from "../types";
import DiscordFeaturePage from "../discord/DiscordFeaturePage";

export interface Feature {
	name: string;
	icon: Icon;
	description: string;
}

export interface FeatureImagePreviewProps {
	features: Feature[];
	right?: boolean;
	left?: boolean;
	title: string;
	subtitle?: string;
	description?: string;
}

export default function FeatureImagePreview({ features, title, subtitle, description }: FeatureImagePreviewProps) {
	return (
		<div className="overflow-hidden dark:bg-black bg-white">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
					<div className="lg:pr-8 lg:pt-4">
						<div className="lg:max-w-lg">
							{subtitle && <h2 className="text-base font-semibold leading-7 text-yellow-400">{subtitle}</h2>}
							<h1
								id={title}
								className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl"
							>
								{title}
							</h1>
							{description && <p className="mt-4 text-lg leading-7 text-zinc-600 dark:text-zinc-500">{description}</p>}
							<dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-zinc-600 dark:text-zinc-500 lg:max-w-none">
								{features.map((feature) => (
									<div key={feature.name} className="relative pl-9">
										<dt className="inline font-semibold text-zinc-900 dark:text-zinc-50">
											<feature.icon className="absolute left-1 top-1 h-5 w-5 text-yellow-600" aria-hidden="true" />
											{feature.name}
										</dt>{" "}
										<dd className="inline">{feature.description}</dd>
									</div>
								))}
							</dl>
						</div>
					</div>
					<DiscordFeaturePage />
				</div>
			</div>
		</div>
	);
}
