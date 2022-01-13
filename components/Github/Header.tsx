import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'

const Header = () => {
	return (
		<header className='flex justify-between items-center p-5 bg-gray-600 text-white'>
			<h1 className='flex items-center space-x-2 capitalize text-xl font-semibold'>
				<span>
					<i>
						<FaGithub />
					</i>
				</span>
				<Link href='/'>github finder</Link>
			</h1>
			{/* <Link href='/about'>
				<a>
					<span className='capitalize'>about</span>
				</a>
			</Link> */}
		</header>
	)
}

export default Header
