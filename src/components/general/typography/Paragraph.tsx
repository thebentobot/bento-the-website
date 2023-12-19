interface Props {
	children: React.ReactNode;
}

export default function Paragraph({ children }: Props) {
	return (
		<p className="mt-4 max-w-2xl text-xl text-gray-900 dark:text-gray-50 lg:mx-auto text-center mx-auto">{children}</p>
	);
}
