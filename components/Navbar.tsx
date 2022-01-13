import Link from 'next/link'
import React, { useState } from 'react'

interface Props {}

const Navbar = (props: Props) => {
	const [darkMode, setDarkMode] = useState(false)

	return (
		<div className={`${darkMode ? 'dark' : ''}`}>
			<nav className='md:flex justify-between items-center p-5 shadow-sm transition duration-350 ease-linear dark:bg-gray-800 dark:text-white'>
				<h1 className='text-3xl cursor-pointer font-semibold'>
					<Link href='/'>Socio-Code</Link>
				</h1>
				<ul className='flex justify-between space-x-5'>
					<li className='cursor-pointer'>
						<Link href='/'>Home</Link>
					</li>
					<li>
						<Link href='/users'>Users</Link>
					</li>
					<li className='cursor-pointer'>
						<Link href='/fakecord'>Fakecord</Link>
					</li>
					<li className='cursor-pointer'>
						<Link href='/register'>Register</Link>
					</li>
					<li>
						<Link href='/login'>Login</Link>
					</li>
					<li>
						<button onClick={() => setDarkMode(!darkMode)}>
							{darkMode ? (
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
										d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
									/>
								</svg>
							) : (
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
										d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
									/>
								</svg>
							)}
						</button>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Navbar
