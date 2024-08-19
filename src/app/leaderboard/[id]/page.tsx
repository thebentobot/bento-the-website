import "server-only";
import SectionWrapper from "@/components/general/SectionWrapper";
import { Suspense } from "react";
import { LeaderboardAsync } from "@/components/leaderboard/LeaderboardAsync";
import { LeaderboardPageSkeleton } from "@/components/leaderboard/LeaderboardPageSkeleton";

export default function Page({ params }: { params: { id: string } }) {
	return (
		<SectionWrapper>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
				<div className="lg:text-center text-center overflow-hidden">
					<Suspense fallback={<LeaderboardPageSkeleton serverId={params.id} />}>
						<LeaderboardAsync serverId={params.id} />
					</Suspense>
				</div>
			</div>
		</SectionWrapper>
	);
}
