import React from "react";

interface Props {
	children: React.ReactNode;
	border?: true;
}

export default function SectionWrapper({ children, border }: Props) {
	return (
		<div
			className={`mt-10 mb-10 space-y-5 mx-auto ${
				border ? "dark:border-t-slate-900 border-t-slate-300 border-t border-opacity-30" : ""
			}`}
		>
			{children}
		</div>
	);
}
