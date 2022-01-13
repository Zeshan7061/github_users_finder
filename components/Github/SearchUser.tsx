import React from 'react'
import { IResponse } from './types'

interface Props {
	data: IResponse | undefined
	searchUsers: (e: React.FormEvent) => void
	clearSearch: () => void
	query: string
	handleQueryChange: (query: string) => void
}

const SearchUser = ({
	data,
	searchUsers,
	clearSearch,
	query,
	handleQueryChange,
}: Props) => {
	return (
		<div
			className={`flex flex-col mb-5 ${
				data?.items.length ? '' : 'justify-center min-h-[600px]'
			}`}>
			<form
				onSubmit={searchUsers}
				className='flex flex-col md:lg:flex-row mt-2'>
				<input
					type='search'
					className='outline-none ring-0 border-0 flex-1 text-xl px-5 py-3 bg-white bg-opacity-20 text-white focus:border-0 focus:ring-0'
					autoFocus
					tabIndex={0}
					placeholder='Github username ...'
					value={query}
					onChange={e => handleQueryChange(e.target.value)}
					required
					minLength={3}
				/>
				<button
					type='submit'
					className='capitalize bg-gray-600 py-3 px-5 text-white font-semibold outline-none hover:bg-gray-800'>
					go
				</button>
			</form>
			{data && data.items.length > 0 && (
				<button
					className='capitalize text-white text-xl bg-gray-600 p-3 transition duration-200
        hover:bg-gray-800 mt-3'
					onClick={clearSearch}
					disabled={!data?.items.length}>
					clear
				</button>
			)}
		</div>
	)
}

export default SearchUser
