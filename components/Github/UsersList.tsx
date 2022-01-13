import React, { useCallback, useState } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import { IResponse } from './types'
import UserCard from './UserCard'
import Loader from '@components/Loader'
import SearchUser from './SearchUser'
import Error from '@components/Error'
import { config, searchUsersUrl } from './config'

export const fetchUsers = async (
	url: string = '',
	query: string = ''
): Promise<IResponse> => axios.get(url + query, config).then(res => res.data)

const UsersList = () => {
	const [fetch, setFetch] = useState(false)
	const [query, setQuery] = useState('')
	const { isLoading, isError, data, remove } = useQuery(
		'users',
		() => fetchUsers(searchUsersUrl, query),
		{
			enabled: fetch,
			// select: (data: IResponse) => data.items.slice(0, 40),
			onSuccess: () => setFetch(false),
			onError: () => setFetch(false),
		}
	)

	const handleQueryChange = useCallback((query: string) => {
		setQuery(query)
	}, [])

	const searchUsers = useCallback(
		(e: React.FormEvent) => {
			e.preventDefault()
			if (query.length > 0) setFetch(true)
		},
		[query.length]
	)

	const clearSearch = useCallback(() => {
		setQuery('')
		remove()
	}, [remove])

	if (isError) return <Error />

	return (
		<div>
			<SearchUser
				query={query}
				handleQueryChange={handleQueryChange}
				searchUsers={searchUsers}
				clearSearch={clearSearch}
				data={data}
			/>

			{isLoading || fetch ? (
				<Loader />
			) : (
				<div className='mb-20 mt-10 grid gap-8 grid-cols-1 lg:grid-cols-2'>
					{data?.items.map(user => (
						<UserCard key={user.login} user={user} />
					))}
				</div>
			)}
		</div>
	)
}

export default UsersList
