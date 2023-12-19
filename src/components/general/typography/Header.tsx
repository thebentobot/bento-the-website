interface Props {
	children: React.ReactNode;
}

export default function Header({ children }: Props) {
	return (
		<h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight dark:text-white text-black sm:text-4xl text-center">
			{children}
		</h1>
	);
}
