"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
	const pathName = usePathname();
	return (
		<div className="py-12 min-h-screen">
			<div className="mx-auto px-4">
				<div className="lg:text-center">
					<h2 className="text-base text-yellow-400 font-semibold tracking-wide">https://www.bentobot.xyz{pathName}</h2>
					<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Error 404</p>
					<p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">The page was not found.</p>
					<Link href="/" className="hover:underline underline-offset-4">
						Return Home
					</Link>
				</div>
			</div>
		</div>
	);
}
