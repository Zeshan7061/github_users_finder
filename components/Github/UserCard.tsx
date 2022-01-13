import Image from 'next/image'
import Link from 'next/link'
import { IUser } from './types'

interface Props {
	user: IUser
}

const UserCard = ({ user }: Props) => {
	return (
		<div
			key={user.id}
			className='flex-shrink-none flex items-center space-x-5 p-3 shadow-lg transition duration-200 hover:shadow-2xl hover:scale-105'>
			<Image
				src={user.avatar_url}
				alt={user.login}
				width={75}
				height={75}
				className='rounded-full flex-shrink-none flex-1'
			/>
			<div className='flex-1 flex flex-col flex-shrink-0'>
				<span className='font-semibold text-xl text-gray-200 truncate'>
					{user.login}
				</span>
				<Link href={`/user/${user.login}`}>
					<a className='text-gray-600 font-semibold'>view profile</a>
					{/* <span className='capitalize text-gray-300 text-sm mt-1'></span> */}
				</Link>
			</div>
		</div>
	)
}

export default UserCard
