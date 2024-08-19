import { GitHubMarkdownAsync } from "@/components/general/GithubMarkdownAsync";
import SkeletonMarkdown from "@/components/general/GithubMarkdownSkeleton";
import SectionWrapper from "@/components/general/SectionWrapper";
import { Suspense } from "react";

export default function Page() {
	return (
		<SectionWrapper>
			<Suspense fallback={<SkeletonMarkdown />}>
				<GitHubMarkdownAsync url="https://raw.githubusercontent.com/thebentobot/dotBento/master/CHANGELOG.md" />
			</Suspense>
		</SectionWrapper>
	);
}
