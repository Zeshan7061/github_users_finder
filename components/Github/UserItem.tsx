import axios from 'axios'
import Image from 'next/image'
import { useQuery } from 'react-query'
import { IUser } from './types'
import DetailCard from './DetailCard'
import ReposList from './ReposList'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'
import Loader from '@components/Loader'
import Error from '@components/Error'
import { config, searchUserUrl } from './config'

interface Props {
	username: string
}

export const fetchUser = async (
	url: string = '',
	query: string = ''
): Promise<IUser> => axios.get(url + query, config).then(res => res.data)

const info = [
	{ name: 'location', field: 'location' },
	{ name: 'website', field: 'blog' },
	{ name: 'twitter', field: 'twitter_username' },
]

const UserItem = ({ username }: Props) => {
	const { isLoading, isError, data } = useQuery(['users', username], () =>
		fetchUser(searchUserUrl, username)
	)

	if (isLoading) return <Loader />
	if (isError) return <Error />

	return (
		<div className='py-10'>
			<div className='my-5 text-center'>
				<Link href='/'>
					<a className='text-2xl font-semibold text-white border-2 px-3 py-1 rounded-full flex items-center space-x-2 w-full sm:w-24 hover:bg-gray-600 text-center justify-center'>
						<FaArrowLeft />
						<span>back</span>
					</a>
				</Link>
			</div>
			<div className='flex flex-wrap justify-center items-center space-x-5'>
				<div className='rounded-lg overflow-hidden'>
					<Image
						src={data?.avatar_url as string}
						width={250}
						height={250}
						alt={username}
						className='object-cover rounded-full drop-shadow-md w-full h-full sm:w-6/12'
					/>
				</div>
				<div className='flex-1 flex flex-col space-y-5 md:lg:pl-5 sm:pl-0 text-white'>
					<h1 className='space-x-5 flex flex-col items-center mb-auto space-y-3 md:lg:flex-row'>
						<span className='text-4xl'>{data?.name || data?.login}</span>
						<span className='space-x-2 flex'>
							<span className='tag text-blue-300 bg-blue-600'>
								{data?.type}
							</span>
							{data?.hireable && (
								<span className='tag text-green-300 bg-green-600'>
									Hireable
								</span>
							)}
						</span>
					</h1>

					<p className='text-lg'>{data?.bio}</p>
					<a
						href={data?.html_url as string}
						target='_blank'
						className='github_btn'>
						view github profile
					</a>
					<div className='flex md:lg:justify-between ms:lg:items-center md:lg:flex-row space-x-0 shadow-md p-5 flex-col'>
						{info.map(el => (
							<div key={el.name} className='mb-5 md:lg:mb-auto'>
								<span className='capitalize'>{el.name}</span>
								<h1
									className={`font-bold ${
										el.name === 'location' && 'capitalize'
									} truncate whitespace-pre-wrap`}>
									{data?.[el.field]}
								</h1>
							</div>
						))}
					</div>
				</div>
			</div>

			<DetailCard data={data as IUser} />
			<ReposList username={username} />
		</div>
	)
}

export default UserItem
