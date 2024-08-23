import "server-only";
import SectionWrapper from "@/components/general/SectionWrapper";
import { Suspense } from "react";
import { LeaderboardPageSkeleton } from "../../components/leaderboard/LeaderboardPageSkeleton";
import { LeaderboardAsync } from "../../components/leaderboard/LeaderboardAsync";

export const revalidate = 3600; // 1 hour

export default function Page() {
	return (
		<SectionWrapper>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
				<div className="lg:text-center text-center overflow-hidden">
					<Suspense fallback={<LeaderboardAsync />}>
						<LeaderboardPageSkeleton />
					</Suspense>
				</div>
			</div>
		</SectionWrapper>
	);
}
