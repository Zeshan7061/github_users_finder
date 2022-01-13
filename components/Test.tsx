import { useState } from 'react'
import { useQuery } from 'react-query'

const Test = () => {
	const [enabled, setEnabled] = useState(false)
	const { isLoading, error, data } = useQuery(
		'test',
		() => {
			return fetch('/api/hello').then(res => res.json())
		},
		{ enabled, initialData: 'test' }
	)

	if (isLoading) return <p className='text-3xl text-slate-700'>Loading...</p>

	return (
		<div>
			<div className='flex my-20 overflow-x-auto gap-5 snap-x container m-auto'>
				<div className='w-96 h-60 bg-slate-400 flex-shrink-0 snap-start'></div>
				<div className='w-96 h-60 bg-slate-400 flex-shrink-0 snap-start'></div>
				<div className='w-96 h-60 bg-slate-400 flex-shrink-0 snap-start'></div>
				<div className='w-96 h-60 bg-slate-400 flex-shrink-0 snap-start'></div>
				<div className='w-96 h-60 bg-slate-400 flex-shrink-0 snap-start'></div>
			</div>
			<button
				onClick={() => setEnabled(!enabled)}
				className='mt-5 bg-blue-600 text-white px-5 py-3 tracking-widest leading-loose rounded-md hover:bg-blue-700 cursor-pointer'>
				{enabled ? 'Disable' : 'Enable'}
			</button>
		</div>
	)
}

export default Test
