import "server-only";
import SectionWrapper from "@/components/general/SectionWrapper";
import { Suspense } from "react";
import { LeaderboardAsync } from "@/components/leaderboard/LeaderboardAsync";
import { LeaderboardPageSkeleton } from "@/components/leaderboard/LeaderboardPageSkeleton";

export const revalidate = 3600; // 1 hour

type Params = Promise<{ id: string }>;

export default async function Page(props: { params: Params }) {
	const params = await props.params;
	const { id } = params;

	return (
		<SectionWrapper>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
				<div className="lg:text-center text-center overflow-hidden">
					<Suspense fallback={<LeaderboardPageSkeleton serverId={id} />}>
						<LeaderboardAsync serverId={id} />
					</Suspense>
				</div>
			</div>
		</SectionWrapper>
	);
}
