import { ComponentProps } from "react";

interface Props extends ComponentProps<"section"> {
	border?: true;
	frontPage?: true;
}

export default function SectionWrapper({ children, border }: Props) {
	return (
		<section
			className={`mt-10 mb-10 space-y-5 mx-auto ${
				border ? "dark:border-t-slate-900/30 border-t-slate-300/30 border-t pt-5" : ""
			}`}
		>
			{children}
		</section>
	);
}
