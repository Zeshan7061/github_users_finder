import { useContext } from 'react'
import { FeedbackContext } from './context/context'
import { Feedback } from './context/types'

interface Props {
	feedback: Feedback
}

const FeedbackItem = ({ feedback }: Props) => {
	const { removeFeedback, dispatch, selectedFeedback } =
		useContext(FeedbackContext)

	const onRemove = () => {
		if (window.confirm('Are you sure you want to delete this feedback?'))
			removeFeedback(feedback.id)
	}

	const onEdit = () => {
		dispatch({
			type: 'SET_SELECTED_FEEDBACK',
			payload: feedback,
		})
	}

	return (
		<div
			className={`bg-gray-200 px-8 rounded-lg relative shadow-lg transition duration-200 ${
				selectedFeedback?.id === feedback.id
					? 'opacity-20 select-none border-4 border-gray-800'
					: 'opacity-100'
			}`}>
			<div className='flex justify-end space-x-2 mt-3 mb-7'>
				<button
					onClick={onEdit}
					disabled={selectedFeedback?.id === feedback.id}
					className={`bg-gray-800 bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 active:scale-105 text-gray-600`}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-5 w-5'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
						/>
					</svg>
				</button>
				<button
					onClick={onRemove}
					disabled={selectedFeedback?.id === feedback.id}
					role='button'
					className='bg-gray-800 bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 active:scale-105 text-gray-600'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h5 w-5'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
						/>
					</svg>
				</button>
			</div>
			<div>
				<q className='italic tracking-wide md:text-xl'>{feedback.text}</q>
				<p className='text-sm font-bold my-2 text-right text-gray-600'>
					{feedback.date.toLocaleString()}
				</p>
				<span className='absolute -top-3 -left-3 w-12 h-12 text-center bg-gray-500 flex justify-center items-center text-white text-lg rounded-full font-semibold shadow-lg border-4 border-white'>
					{feedback.rating}
				</span>
			</div>
		</div>
	)
}

export default FeedbackItem
