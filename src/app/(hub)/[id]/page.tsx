

export default function HubPage({ params }: { params: { id: string } }) {
	const hubLinks: HubLink[] = [
		{ name: 'Discord', url: 'https://www.discord.gg/' },
		{ name: 'SpigotMC', url: 'https://www.spigotmc.org/' },
		{ name: 'GitHub', url: 'https://www.github.com/' },
		{ name: 'Steam', url: 'https://www.steampowerred.com/' },
		{ name: 'OnlyFans', url: 'https://www.onlyfans.com/', adult: true },
		{ name: 'Fansly', url: 'https://www.fansly.com/', adult: true },
	];

	return (
		<div className='min-h-[100vh] bg-orange-200'>
			<div className='container flex max-w-md flex-col items-center gap-8 p-3 md:pt-5'>
				<div className='mt-12 flex flex-col items-center gap-4'>
					<img className='aspect-square w-28 rounded-full' src='https://avatars.githubusercontent.com/u/36168080?v=4' alt='Profile Picture' />
					<div className='flex flex-col items-center text-center'>
						<h3 className='text-2xl font-black'>Kiran Hart</h3>
						<h4 className='text-lg font-medium'>@kiranhart</h4>
						<p className='mt-2 text-lg font-normal'>Hey I'm Kiran, and welcome to my page. Here you will be able to find all of my important links.</p>
					</div>
				</div>
				<div className='flex gap-4'>
					<svg xmlns='http://www.w3.org/2000/svg' className='aspect-square h-8' fill='currentColor' viewBox='0 0 24 24'>
						<path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
					</svg>
					<svg xmlns='http://www.w3.org/2000/svg' className='aspect-square h-8' fill='currentColor' viewBox='0 0 24 24'>
						<path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
					</svg>
					<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' className='aspect-square h-8'>
						<path
							fill='currentColor'
							d='M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z'
						/>
					</svg>
					<svg xmlns='http://www.w3.org/2000/svg' className='aspect-square h-8' fill='currentColor' viewBox='0 0 24 24'>
						<path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' />
					</svg>
				</div>
				<div className='flex w-full flex-col gap-4'>
					{hubLinks.map((link, index) => {
						return <HubLink link={link} key={link.url} />;
					})}
				</div>

				<div className='rounded-full bg-black px-4 py-2 mb-4'>
					<h3 className='inline-block bg-gradient-to-r from-blue-400 via-green-400 to-pink-500 bg-clip-text font-bold text-transparent'>Create your own hub</h3>
				</div>
			</div>
		</div>
	);
}

function HubLink({ link }: { link: HubLink }) {
	return (
		<a className='min-w-full rounded-md bg-white p-4 text-center font-bold' href={link.url}>
			{link.name}
		</a>
	);
}