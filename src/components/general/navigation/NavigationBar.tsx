"use client";
import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon, MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

export const useLoaded = () => {
	const [loaded, setLoaded] = useState(false);
	useEffect(() => setLoaded(true), []);
	return loaded;
};

export interface navigationRoute {
	icon?: string;
	name: string;
	href: string;
	current: boolean;
}

export interface navigationExtendedRoute extends navigationRoute {
	// på den her måde kan vi tilføje flere routes til en dropdown/popover menu
	group?: navigationRoute[];
}

interface Props {
	/**
	 * JSX Component for displaying selected images in a fullscreen Modal
	 * @returns
	 */
	navigationRoutes: navigationRoute[];
	notifications?: string;
	avatar?: string;
}

export default function NavigationBar({ navigationRoutes, notifications, avatar }: Props) {
	const [isVisible, setIsVisible] = useState(false);
	const { theme, setTheme } = useTheme();
	const loaded = useLoaded();

	useEffect(() => {
		// Border is displayed after scrolling for 250 pixels
		const toggleVisibility = () => {
			if (window.scrollY > 1) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);

		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	return (
		<Disclosure
			as="nav"
			className={`bg-inherit sticky top-0 z-40 backdrop-filter backdrop-blur-sm bg-opacity-30 ${
				isVisible ? "border-b dark:border-zinc-900/25 border-zinc-100/25 shadow" : ""
			}`}
		>
			{({ open }) => (
				<Fragment>
					<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
						<div className="relative flex h-16 items-center justify-between">
							<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
								{/* Mobile menu button*/}
								<Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-zinc-400 dark:hover:bg-yellow-500 hover:bg-yellow-400 hover:text-black ">
									<span className="sr-only">Open main menu</span>
									{open ? (
										<XMarkIcon className="block h-6 w-6" aria-hidden="true" />
									) : (
										<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
									)}
								</Disclosure.Button>
							</div>
							<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
								<Link
									href={"/"}
									className="hover:bg-yellow-400 transition-colors duration-300 ease-in-out dark:text-zinc-300 dark:hover:bg-yellow-500 hover:text-black text-black rounded-md"
								>
									<div className="flex flex-shrink-0 items-center">
										<Image className="block h-8 w-auto lg:hidden" width={500} height={500} src="/29.png" alt="Bento" />
										<Image className="hidden h-8 w-auto lg:block" width={500} height={500} src="/29.png" alt="Bento" />
										<span
											key={"Bento"}
											className={"rounded-md px-3 py-2 text-sm font-medium transition-colors duration-300 ease-in-out"}
										>
											Bento
										</span>
									</div>
								</Link>
								<div className="hidden sm:ml-6 sm:block">
									<div className="flex space-x-4">
										{navigationRoutes.map((item) => (
											<a
												key={item.name}
												href={item.href}
												className={classNames(
													item.current
														? "dark:bg-yellow-500 bg-yellow-400 dark:text-zinc-300 text-black"
														: "dark:text-zinc-300 dark:hover:bg-yellow-500 hover:bg-yellow-400 hover:text-black text-black",
													"rounded-md px-3 py-2 text-sm font-medium transition-colors duration-300 ease-in-out",
												)}
												aria-current={item.current ? "page" : undefined}
											>
												{item.name}
											</a>
										))}
									</div>
								</div>
							</div>
							<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
								{notifications && (
									<button
										type="button"
										className="bg-zinc-800 p-1 rounded-full text-zinc-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
									>
										<span className="sr-only">View notifications</span>
										<BellIcon className="h-6 w-6" aria-hidden="true" />
									</button>
								)}
								{loaded && (
									<button
										type="button"
										onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
										className="bg-inherit p-1 rounded-full dark:hover:bg-white hover:bg-black transition-colors duration-300 ease-in-out"
									>
										<span className="sr-only">Change layout mode</span>
										{theme === "dark" ? (
											<MoonIcon
												className="h-6 w-6 transition-colors duration-500 ease-in-out dark:text-zinc-300 text-black dark:hover:text-black hover:text-white"
												aria-hidden="true"
											/>
										) : (
											<SunIcon
												className="h-6 w-6 transition-colors duration-500 ease-in-out dark:text-zinc-300 text-black dark:hover:text-black hover:text-white"
												aria-hidden="true"
											/>
										)}
									</button>
								)}
								{/* Profile dropdown */}
								{avatar && (
									<Menu as="div" className="relative ml-3">
										<div>
											<Menu.Button className="flex rounded-full bg-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-800">
												<span className="sr-only">Open user menu</span>
												<Image className="h-8 w-8 rounded-full" src="/29.png" width={10} height={10} alt="" />
											</Menu.Button>
										</div>
										<Transition
											as={Fragment}
											enter="transition ease-out duration-100"
											enterFrom="transform opacity-0 scale-95"
											enterTo="transform opacity-100 scale-100"
											leave="transition ease-in duration-75"
											leaveFrom="transform opacity-100 scale-100"
											leaveTo="transform opacity-0 scale-95"
										>
											<Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
												<Menu.Item>
													{({ active }) => (
														<a
															href="#"
															className={classNames(
																active ? "bg-zinc-100" : "",
																"block px-4 py-2 text-sm text-zinc-700",
															)}
														>
															Your Profile
														</a>
													)}
												</Menu.Item>
												<Menu.Item>
													{({ active }) => (
														<a
															href="#"
															className={classNames(
																active ? "bg-zinc-100" : "",
																"block px-4 py-2 text-sm text-zinc-700",
															)}
														>
															Settings
														</a>
													)}
												</Menu.Item>
												<Menu.Item>
													{({ active }) => (
														<a
															href="#"
															className={classNames(
																active ? "bg-zinc-100" : "",
																"block px-4 py-2 text-sm text-zinc-700",
															)}
														>
															Sign out
														</a>
													)}
												</Menu.Item>
											</Menu.Items>
										</Transition>
									</Menu>
								)}
							</div>
						</div>
					</div>

					<Disclosure.Panel className="sm:hidden">
						<div className="space-y-1 px-2 pb-3 pt-2">
							{navigationRoutes.map((item) => (
								<Disclosure.Button
									key={item.name}
									as="a"
									href={item.href}
									className={classNames(
										item.current
											? "dark:bg-yellow-500 bg-yellow-400 dark:text-zinc-300 text-black"
											: "dark:text-zinc-300 dark:hover:bg-yellow-500 hover:bg-yellow-400 hover:text-black text-black",
										"block rounded-md px-3 py-2 text-base font-medium transition-colors duration-300 ease-in-out text-center",
									)}
									aria-current={item.current ? "page" : undefined}
								>
									{item.name}
								</Disclosure.Button>
							))}
						</div>
					</Disclosure.Panel>
				</Fragment>
			)}
		</Disclosure>
	);
}
