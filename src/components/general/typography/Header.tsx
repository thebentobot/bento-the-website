import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

export default function Header({ children }: Props) {
	return (
		<h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight dark:text-white text-black sm:text-4xl text-center">
			{children}
		</h1>
	);
}

export function SubHeader({ children }: Props) {
	return (
		<h2 className="mt-2 text-2xl leading-7 font-semibold text-yellow-400 dark:text-yellow-300 text-center">
			{children}
		</h2>
	);
}
