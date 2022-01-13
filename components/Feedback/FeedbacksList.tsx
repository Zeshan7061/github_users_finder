import { useContext, useState } from 'react'
import AddFeedback from './AddFeedback'
import { FeedbackContext } from './context/context'
import FeedbackItem from './FeedbackItem'
import Header from './Header'

const FeedbacksList = () => {
	const [isOpen, setIsOpen] = useState(false)
	const { feedbacks } = useContext(FeedbackContext)

	const rating =
		(feedbacks &&
			(
				feedbacks.reduce((acc, curr) => acc + curr.rating, 0) /
				feedbacks.length
			).toFixed(1)) ||
		0

	return (
		<div className='space-y-9 w-full relative'>
			<Header />
			<AddFeedback />

			{feedbacks && feedbacks.length > 0 && (
				<div className='flex justify-between items-center bg-gray-200 rounded-lg text-gray-600'>
					<span className='text-lg font-semibold capitalize bg-gray-800 bg-opacity-10 p-2 rounded-md'>
						{feedbacks?.length ? 'feedbacks - ' + feedbacks.length : ''}
					</span>
					<span className='text-lg font-semibold capitalize bg-gray-800 bg-opacity-10 p-2 rounded-md'>
						{rating ? 'rating - ' + rating : ''}
					</span>
				</div>
			)}

			<div className='flex flex-col space-y-5'>
				{feedbacks?.map(fb => (
					<FeedbackItem key={fb.id} feedback={fb} />
				))}
			</div>

			<div className='relative'>
				<button
					className='w-16 h-16 rounded-full shadow-2xl shadow-gray-900/50 fixed bottom-5 right-5 z-50 bg-gray-600 text-white font-bold text-xl hover:scale-105 transition duration-200 cursor-pointer'
					onClick={() => setIsOpen(!isOpen)}>
					?
				</button>
			</div>

			<div className='grid place-items-center m-auto shadow-2xl'>
				<div
					className={`bg-gray-200 rounded-lg p-5 shadow-lg fixed top-5 z-50 m-auto border-2 transition duration-300 ${
						isOpen ? 'translate-y-0' : '-translate-y-60'
					}`}>
					<div className='relative'>
						<button
							className='absolute right-0 top-3'
							onClick={() => setIsOpen(false)}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-4 w-4'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M6 18L18 6M6 6l12 12'
								/>
							</svg>
						</button>
					</div>

					<div className='space-y-3'>
						<h1 className='capitalize font-bold mt-3 text-xl'>
							about this project
						</h1>
						<p className=''>
							An application to collect feedback from users
						</p>
						<span className='text-gray-600 mt-3 inline-block'>
							version 0.1.1
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FeedbacksList
