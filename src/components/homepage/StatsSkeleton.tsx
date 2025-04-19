export const StatsSkeleton = () => (
	<div className="mt-10 pb-1">
		<div className="relative">
			<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-4xl mx-auto">
					<dl className="sm:grid sm:grid-cols-3">
						<div className="flex flex-col  p-6 text-center ">
							<dt className="order-2 mt-2 text-lg leading-6 font-medium dark:text-white text-black">Servers</dt>
							<div className="flex gap-x-2 justify-center items-center h-12">
								<span className="sr-only">Loading...</span>
								<div className="h-6 w-6 dark:bg-white bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
								<div className="h-6 w-6 dark:bg-white bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
								<div className="h-6 w-6 dark:bg-white bg-black rounded-full animate-bounce"></div>
							</div>
						</div>
						<div className="flex flex-col p-6 text-center ">
							<dt className="order-2 mt-2 text-lg leading-6 font-medium dark:text-white text-black">Users</dt>
							<div className="flex gap-x-2 justify-center items-center h-12">
								<span className="sr-only">Loading...</span>
								<div className="h-6 w-6 dark:bg-white bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
								<div className="h-6 w-6 dark:bg-white bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
								<div className="h-6 w-6 dark:bg-white bg-black rounded-full animate-bounce"></div>
							</div>
						</div>
						<div className="flex flex-col p-6 text-center">
							<dt className="order-2 mt-2 text-lg leading-6 font-medium dark:text-white text-black">
								Serving the first Bento
							</dt>
							<dd className="order-1 text-5xl font-extrabold dark:text-white text-black">Aug 2021</dd>
						</div>
					</dl>
				</div>
			</div>
		</div>
	</div>
);
