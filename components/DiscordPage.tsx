import Image from 'next/image'
import React from 'react'

interface Props {}

const DiscordPage = (props: Props) => {
	return (
		<div>
			<header className='flex justify-between items-center bg-gray-700 text-white py-5 px-20'>
				<h1 className='flex justify-between items-center font-bold text-2xl'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-6 w-6'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z'
						/>
					</svg>
					<span className='ml-2'>Fakecord</span>
				</h1>

				<nav>
					<ul className='flex justify-between items-center space-x-10'>
						<li>
							<a href='#' className=''>
								Download
							</a>
						</li>
						<li>
							<a href='#' className=''>
								Nitro
							</a>
						</li>
						<li>
							<a href='#' className=''>
								Safety
							</a>
						</li>
						<li>
							<a href='#' className=''>
								Support
							</a>
						</li>
						<li>
							<a href='#' className=''>
								Blog
							</a>
						</li>
						<li>
							<a href='#' className=''>
								Carrers
							</a>
						</li>
					</ul>
				</nav>

				<button className='capitalize bg-white rounded-full text-black py-2 px-3 text-center'>
					login
				</button>
			</header>

			<section className='flex items-center py-10 px-16 m-auto'>
				<div className='flex-1'>
					<h1 className='uppercase font-bold text-6xl w-3/5'>
						get discord for any device
					</h1>
					<p className='mt-5 w-4/5'>
						An adventure awaits. Hang out with your friends on our
						desktop app and keep the conversation going on mobile.
					</p>
					<div className='flex items-center mt-3'>
						<button className='px-5 py-3 rounded-full bg-blue-500 text-xl text-white mt-5 capitalize mr-5 flex space-x-3 hover:bg-blue-600'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4'
								/>
							</svg>
							<span>download for windows</span>
						</button>
						<span className='mt-5'>Windows 7 or higher</span>
					</div>
				</div>
				<div className='flex-1 flex-shrink-0'>
					<Image
						src='https://discord.com/assets/d0d4785a2a708e2e6aae274cbe13cb6c.svg'
						alt='discord'
						width={600}
						height={600}
						className='flex-none w-full'
					/>
				</div>
			</section>

			<section className='flex justify-center space-x-5 p-10'>
				<div className='flex-1 flex items-center flex-col space-y-5 text-center p-5 bg-gray-100 rounded-2xl'>
					<h1 className='text-3xl font-bold'>iOS</h1>
					<button className='text-white bg-black p-5 text-center rounded-full mb-20 w-2/5 block'>
						Download
					</button>
					<div className='mt-20'>
						<Image
							src='https://discord.com/assets/7802f24afe58bfbf4cfd3a9e4b210f15.svg'
							width='300'
							height='300'
							alt='iOS'
							className='mt-16 w-full'
						/>
					</div>
				</div>
				<div className='flex flex-1 items-center flex-col space-y-5 text-center p-5 bg-gray-100 rounded-2xl'>
					<h1 className='text-3xl font-bold'>iOS</h1>
					<button className='text-white bg-black p-5 text-center rounded-full mb-20 w-2/5 block'>
						Download
					</button>
					<div className='mt-20'>
						<Image
							src='https://discord.com/assets/7802f24afe58bfbf4cfd3a9e4b210f15.svg'
							width='300'
							height='300'
							alt='iOS'
							className='mt-16 w-full'
						/>
					</div>
				</div>
			</section>

			<section className='flex justify-center space-x-5 mb-2 p-10'>
				<div className='flex-1 flex items-center flex-col space-y-5 text-center p-5 bg-gray-100 rounded-2xl'>
					<h1 className='text-3xl font-bold'>iOS</h1>
					<button className='text-white bg-black p-5 text-center rounded-full mb-20 w-2/5 block'>
						Download
					</button>
					<div className='mt-20'>
						<Image
							src='https://discord.com/assets/7802f24afe58bfbf4cfd3a9e4b210f15.svg'
							width='300'
							height='300'
							alt='iOS'
							className='mt-16 w-full'
						/>
					</div>
				</div>
				<div className='flex flex-1 items-center flex-col space-y-5 text-center p-5 bg-gray-100 rounded-2xl'>
					<h1 className='text-3xl font-bold'>iOS</h1>
					<button className='text-white bg-black p-5 text-center rounded-full mb-20 w-2/5 block'>
						Download
					</button>
					<div className='mt-20'>
						<Image
							src='https://discord.com/assets/7802f24afe58bfbf4cfd3a9e4b210f15.svg'
							width='300'
							height='300'
							alt='iOS'
							className='mt-16 w-full'
						/>
					</div>
				</div>
			</section>

			<section className='flex mb-5 p-10'>
				<div className='flex-1 flex items-center flex-col space-y-5 text-center p-5 bg-gray-100 rounded-2xl'>
					<h1 className='text-3xl font-bold'>iOS</h1>
					<button className='text-white bg-black p-5 text-center rounded-full mb-20 w-2/5 block'>
						Download
					</button>
					<div className='mt-20'>
						<Image
							src='https://discord.com/assets/7802f24afe58bfbf4cfd3a9e4b210f15.svg'
							width='300'
							height='300'
							alt='iOS'
							className='mt-16 w-full'
						/>
					</div>
				</div>
			</section>
		</div>
	)
}

export default DiscordPage
