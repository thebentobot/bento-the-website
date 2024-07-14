import { GitHubMarkdownAsync } from "@/components/general/GithubMarkdownAsync";
import SectionWrapper from "@/components/general/SectionWrapper";
import { Suspense } from "react";

export default function Page() {
	return (
		<SectionWrapper>
			<Suspense fallback={<div>Loading...</div>}>
				<GitHubMarkdownAsync url="https://raw.githubusercontent.com/thebentobot/dotBento/master/CHANGELOG.md" />
			</Suspense>
		</SectionWrapper>
	);
}
