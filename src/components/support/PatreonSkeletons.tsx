import { SubHeader } from "@/components/general/typography/Header";
import { PatreonAvatarSkeleton } from "./PatreonAvatarSkeleton";
import { Fragment } from "react";

export const PatreonSkeletons = () => (
	<Fragment>
		<div className="max-w-screen-2xl mx-auto px-3 pt-2">
			<SubHeader>Patreon Tier</SubHeader>
			<ul className="block flex-wrap mx-auto text-center">
				<div className="mx-auto inline-block p-1">
					<PatreonAvatarSkeleton rank={1} />
				</div>
				<div className="mx-auto inline-block p-1">
					<PatreonAvatarSkeleton rank={1} />
				</div>
			</ul>
		</div>
		<div className="max-w-screen-2xl mx-auto px-3 pt-2">
			<SubHeader>Patreon Tier</SubHeader>
			<ul className="block flex-wrap mx-auto text-center">
				<div className="mx-auto inline-block p-1">
					<PatreonAvatarSkeleton rank={2} />
				</div>
			</ul>
		</div>
	</Fragment>
);
