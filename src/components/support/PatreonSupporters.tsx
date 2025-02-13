import Link from "next/link";
import PatreonParent from "./PatreonParent";
import { SubHeader } from "../general/typography/Header";
import { Fragment } from "react";
import { PatreonsByTier } from "@/server/patreon";

export default function PatreonSupporters({ sponsors, disciples, enthusiasts, followers, supporters }: PatreonsByTier) {
	// Create an array of all categories with their respective data and labels.
	const categories = [
		{ data: sponsors, label: "Sponsor" },
		{ data: disciples, label: "Disciple" },
		{ data: enthusiasts, label: "Enthusiast" },
		{ data: followers, label: "Follower" },
		{ data: supporters, label: "Supporter" },
	];

	// Check if all categories are empty
	const areAllCategoriesEmpty = categories.every((category) => category.data.length === 0);

	return (
		<Fragment>
			{areAllCategoriesEmpty ? (
				<div className="max-w-(--breakpoint-2xl) mx-auto px-3 pt-2">
					<p className="mt-4 max-w-2xl text-xl text-zinc-300 lg:mx-auto text-center mx-auto">
						Other than the awesome users who support by using Bento 🍱
						<br />
						no <strong>Patrons</strong> on{" "}
						<Link
							href="https://www.patreon.com/bentobot"
							target="_blank"
							rel="noreferrer"
							className="text-patreon hover:underline"
						>
							Patreon
						</Link>{" "}
						at the moment.
					</p>
				</div>
			) : (
				categories.map(
					(category) =>
						category.data.length > 0 && (
							<div key={category.label} className="max-w-(--breakpoint-2xl) mx-auto px-3 pt-2">
								<SubHeader>
									{category.data.length > 1 ? `Bento ${category.label}s` : `Bento ${category.label}`}
								</SubHeader>
								<PatreonParent items={category.data} />
							</div>
						),
				)
			)}
		</Fragment>
	);
}
