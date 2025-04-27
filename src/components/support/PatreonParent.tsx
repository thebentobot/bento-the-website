import { PatreonWithRank } from "@/server/patreon";
import PatreonAvatar from "./PatreonAvatar";

export default function PatreonParent({ items }: { items: PatreonWithRank[] }) {
	return (
		<ul className="block flex-wrap mx-auto text-center">
			{items.map((patreonUser, i) => (
				<div key={i} className="mx-auto inline-block p-1">
					<PatreonAvatar {...patreonUser} key={patreonUser.userId} />
				</div>
			))}
		</ul>
	);
}
