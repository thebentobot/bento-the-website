import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

export default function Paragraph({ children }: Props) {
	return (
		<p className="mt-4 max-w-2xl text-xl text-zinc-900 dark:text-zinc-50 lg:mx-auto text-center mx-auto">{children}</p>
	);
}
