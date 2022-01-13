import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

interface Props {}

const Page1: NextPage = (props: Props) => {
	return (
		<div className='pb-20'>
			<div className='bg-gradient-to-r from-purple-500 to-orange-500'>
				<header className='container m-auto'>
					<nav className='flex justify-between items-center p-5 text-white'>
						<h1 className='text-3xl font-bold cursor-pointer'>
							<Link href='/'>fuse</Link>
						</h1>
						<ul className='flex justify-between items-center p-5 space-x-16'>
							<li>
								<Link href='/'>Home</Link>
							</li>
							<li>
								<Link href='/page1'>Features</Link>
							</li>
							<li>
								<Link href='/'>Gallery</Link>
							</li>
							<li>
								<Link href='/'>Pricing</Link>
							</li>
							<li>
								<Link href='/'>About</Link>
							</li>
						</ul>
						<button className='capitalize border-2 border-white px-7 py-1 rounded'>
							start trail
						</button>
					</nav>
				</header>

				<main className='mt-40 flex items-center container m-auto pb-10'>
					<div>
						<div className='space-x-3'>
							<span className='text-white bg-slate-400 px-5 py-1 uppercase'>
								welcome to the site
							</span>
							<button className='bg-yellow-300 px-5 py-1 uppercase'>
								free trail
							</button>
						</div>

						<h1 className='text-6xl uppercase mt-5 mb-5 w-2/5 text-white'>
							we help achieve biggest goals
						</h1>
						<p className='text-white my-5 w-2/5'>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Repellendus neque fugiat nobis adipisci deserunt fuga
							dicta. Sunt dolores quo modi.
						</p>
						<button className='text-white px-7 py-2 border-2 border-white rounded capitalize my-2 cursor-pointer hover:bg-yellow-300 hover:text-black'>
							get started
						</button>
					</div>
					<div>
						<Image
							src='https://www.pngarts.com/files/8/Mobile-Apps-PNG-Photo.png'
							width={300}
							height={300}
							alt='mobile apps'
						/>
					</div>
				</main>
			</div>

			<section className='mt-20 py-3'>
				<div className='text-center my-16'>
					<span className='capitalize text-orange-500'>
						checkout app features
					</span>
					<h1 className='capitalize text-2xl font-bold'>
						the only app you will need
					</h1>
				</div>
				<div className='flex justify-center space-x-5'>
					<div className='text-center bg-white p-5 shadow-md rounded'>
						<div className='w-24 h-24 bg-purple-700 rounded-full'></div>
						<h1 className='capitalize font-bold mt-3'>quick access</h1>
					</div>
					<div className='text-center bg-white p-5 shadow-md rounded'>
						<div className='w-24 h-24 bg-blue-700 rounded-full'></div>
						<h1 className='capitalize font-bold mt-3'>manage users</h1>
					</div>
					<div className='text-center bg-white p-5 shadow-md rounded'>
						<div className='w-24 h-24 bg-purple-700 rounded-full'></div>
						<h1 className='capitalize font-bold mt-3'>fully secured</h1>
					</div>
					<div className='text-center bg-white p-5 shadow-md rounded'>
						<div className='w-24 h-24 bg-pink-700 rounded-full'></div>
						<h1 className='capitalize font-bold mt-3'>daily updates</h1>
					</div>
					<div className='text-center bg-white p-5 shadow-md rounded'>
						<div className='w-24 h-24 bg-orange-700 rounded-full'></div>
						<h1 className='capitalize font-bold mt-3'>free setup</h1>
					</div>
				</div>
			</section>

			<section className='container m-auto mt-20 flex justify-center items-center space-x-40 w-6/12'>
				<div>
					<Image
						src='https://getvoip.com/uploads/Business-Text-Message-Providers-in-2021-Your-Ultimate-Guide-1.jpg'
						height={300}
						width={300}
						alt='Your Ultimate Guide'
					/>
				</div>
				<div className=''>
					<div>
						<span className='capitalize text-orange-500'>
							checkout app features
						</span>
						<h1 className='font-bold text-2xl capitalize'>
							control everything from one application
						</h1>
					</div>
					<div>
						<div className='bg-white p-5'>
							<div className='flex space-x-5'>
								<div className='w-36 h-24 bg-purple-700 rounded-full'></div>
								<div>
									<h1 className='capitalize font-bold mt-3'>
										feature one
									</h1>
									<p>
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Non facilis veritatis
										numquam adipisci perspiciatis exercitationem,
										labore enim, corporis porro neque deleniti
										consequatur similique eligendi rerum?
									</p>
								</div>
							</div>
						</div>
						<div className='bg-white p-5'>
							<div className='flex space-x-5'>
								<div className='w-36 h-24 bg-purple-700 rounded-full'></div>
								<div>
									<h1 className='capitalize font-bold mt-3'>
										feature one
									</h1>
									<p>
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Non facilis veritatis
										numquam adipisci perspiciatis exercitationem,
										labore enim, corporis porro neque deleniti
										consequatur similique eligendi rerum?
									</p>
								</div>
							</div>
						</div>

						<button className='border-2 border-white capitalize text-white bg-orange-400 px-5 py-2 rounded-md'>
							discover more
						</button>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Page1
