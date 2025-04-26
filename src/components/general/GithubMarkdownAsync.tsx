import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

async function getData(url: string): Promise<string> {
	const res = await fetch(url);

	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error(`Failed to fetch data from ${url}`);
	}

	return res.text();
}

export async function GitHubMarkdownAsync({ url }: { url: string }) {
	const data = await getData(url);
	const lines = data?.split("\n");
	const withoutTitle = lines?.join("\n");

	return (
		<div className="prose dark:prose-invert lg:prose-xl mx-auto dark:prose-h1:text-white prose-h1:text-black prose-h2:text-yellow-400 dark:prose-h3:text-white prose-h3:text-black dark:prose-p:text-white prose-p:text-black dark:prose-ul:text-white prose-ul:text-black prose-strong:text-yellow-400 prose-a:text-yellow-400">
			<ReactMarkdown remarkPlugins={[remarkGfm]}>{withoutTitle}</ReactMarkdown>
		</div>
	);
}
