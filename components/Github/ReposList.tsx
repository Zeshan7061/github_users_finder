import axios from 'axios'
import { useQuery } from 'react-query'
import Repo from './Repo'
import { config, searchUserUrl } from './config'

export interface IRepo extends Record<string, any> {
	name: string
	description: string
	html_url: string
	forks: number
	open_issues: number
	watchers_count: number
	stargazers_count: number
}

export const fetchRepos = async (
	url: string = '',
	query: string = ''
): Promise<IRepo[]> => axios.get(url + query, config).then(res => res.data)

interface Props {
	username: string
}

const ReposList = ({ username }: Props) => {
	const userRepos = useQuery(
		['userRepos', username],
		() => fetchRepos(searchUserUrl, username + '/repos'),
		{
			select: (data: IRepo[]) => data.slice(0, 10),
		}
	)

	return (
		<div className='flex flex-col space-y-5 mt-12'>
			<h1 className='text-3xl capitalize font-bold text-white tracking-wide'>
				latest respositories
			</h1>

			{userRepos?.data?.map(repo => (
				<Repo key={repo.html_url} repo={repo} />
			))}
		</div>
	)
}

export default ReposList
