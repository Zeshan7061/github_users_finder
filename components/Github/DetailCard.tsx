import { FaUsers, FaUserFriends, FaStore, FaGalacticRepublic } from 'react-icons/fa'
import { IUser } from './types'

interface Props {
	data: IUser
}

const classes = 'text-4xl text-yellow-300'

const details = [
	{
		name: 'followers',
		icon: <FaUsers className={classes} />,
	},
	{
		name: 'following',
		icon: <FaUserFriends className={classes} />,
	},
	{
		name: 'public_repos',
		icon: <FaStore className={classes} />,
	},
	{
		name: 'public_gists',
		icon: <FaGalacticRepublic className={classes} />,
	},
]

const DetailCard = ({ data }: Props) => {
	return (
		<div className='py-5 my-14 flex flex-wrap justify-between'>
			{details.map(el => (
				<div
					className='flex items-center space-x-10 flex-1 p-5 capitalize text-white shadow-md'
					key={el.name}>
					<div>
						<p className='text-lg text-gray-300'>
							{el.name.replace('_', ' ')}
						</p>
						<h1 className='text-4xl font-bold'>{data?.[el.name]}</h1>
					</div>
					{el.icon}
				</div>
			))}
		</div>
	)
}

export default DetailCard
