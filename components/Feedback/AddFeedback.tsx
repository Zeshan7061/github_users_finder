import { v4 as uuid } from 'uuid'
import { useCallback, useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { FeedbackContext } from './context/context'

type FormData = {
	text: string
}

const AddFeedback = () => {
	const [rating, setRating] = useState(0)
	const { addFeedback, selectedFeedback, updateFeedback } =
		useContext(FeedbackContext)
	const {
		register,
		handleSubmit,
		formState: { errors },
		setFocus,
		setValue,
	} = useForm<FormData>({
		defaultValues: {
			text: '',
		},
	})

	useEffect(() => {
		if (selectedFeedback) {
			setRating(selectedFeedback.rating)
			setValue('text', selectedFeedback.text)
		}
	}, [selectedFeedback, setValue])

	const onSubmit = useCallback(
		(data: FormData) => {
			if (!data.text.trim().length) return alert('Please enter some text')
			if (!rating || rating === 0) return alert('Please select a rating')

			const feedback = {
				id: selectedFeedback ? selectedFeedback.id : uuid(),
				text: data.text,
				rating: rating,
				date: selectedFeedback ? selectedFeedback.date : new Date(),
			}

			selectedFeedback ? updateFeedback(feedback) : addFeedback(feedback)

			setValue('text', '')
			setRating(0)
			setFocus('text')
		},
		[addFeedback, setValue, setFocus, rating, selectedFeedback, updateFeedback]
	)

	const onRating = useCallback((rating: number) => {
		setRating(rating)
	}, [])

	return (
		<div className='p-5 bg-gray-200 rounded-lg'>
			<h1 className='text-center text-xl font-semibold text-gray-600'>
				How would you like to rate our service?
			</h1>
			<div className='flex flex-wrap gap-2 md:space-x-5 justify-center items-center my-10'>
				{Array.from({ length: 10 }).map((_, i) => (
					<button
						key={i}
						className={`w-12 h-12 text-white rounded-full text-lg font-bold flex items-center justify-center transition duration-200 cursor-pointer hover:bg-gray-700 ${
							rating === i + 1 ? 'bg-gray-700' : 'bg-gray-500'
						}`}
						onClick={() => onRating(i + 1)}>
						{i + 1}
					</button>
				))}
			</div>

			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='flex md:justify-between border-2 border-gray-400 rounded-lg p-1 md:flex-row flex-col'>
					<input
						type='text'
						{...register('text', { required: true, minLength: 10 })}
						className='border-0 focus:outline-0 focus:ring-0 bg-transparent flex-1'
						tabIndex={0}
						autoFocus
						placeholder='What did you like or dislike?'
						aria-invalid
					/>
					<input
						type='submit'
						value={selectedFeedback ? 'update' : 'send'}
						className='capitalize bg-gray-500 text-white rounded-md px-5 py-2 text-center transition duration-200 cursor-pointer hover:bg-gray-800 flex-1'
					/>
				</div>
				{errors.text && (
					<p className='text-red-500 text-left'>
						* Feedback is required and must be at least 10 characters
						long
					</p>
				)}
			</form>
		</div>
	)
}

export default AddFeedback
