import { FaLink, FaEye, FaStar, FaInfo, FaUtensils } from 'react-icons/fa'
import { IRepo } from './UserItem'

interface Props {
	repo: IRepo
}

const Repo = ({ repo }: Props) => {
	return (
		<>
			<a href={repo.html_url} target='_blank' rel='noreferrer'>
				<div className='p-7 shadow-md rounded-md space-y-5 bg-gray-600 transition duration-200 hover:bg-gray-800'>
					<p className='flex items-center space-x-3 text-white text-lg font-semibold'>
						<FaLink />
						<span>{repo.name} </span>
					</p>
					<div className='flex space-x-3'>
						<span className='repo_tag text-green-700 bg-green-200'>
							<FaEye />
							<span>{repo.watchers_count}</span>
						</span>
						<span className='repo_tag text-blue-700 bg-blue-200'>
							<FaStar />
							<span>{repo.stargazers_count}</span>
						</span>
						<span className='repo_tag text-orange-700 bg-orange-200'>
							<FaInfo />
							<span>{repo.open_issues}</span>
						</span>
						<span className='repo_tag text-yellow-700 bg-yellow-200'>
							<FaUtensils />
							<span>{repo.forks}</span>
						</span>
					</div>
				</div>
			</a>
		</>
	)
}

export default Repo
