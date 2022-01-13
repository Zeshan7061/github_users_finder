import { v4 as uuid } from 'uuid'
import { Feedback } from './context/types'

export const feedbacks: Feedback[] = [
	{
		id: uuid(),
		text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero quam unde quae laboriosam? Saepe nemo animi nam placeat aliquam neque.',
		date: new Date(),
		rating: 7,
	},
	{
		id: uuid(),
		text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero quam unde quae laboriosam? Saepe nemo animi nam placeat aliquam neque.',
		date: new Date(),
		rating: 8,
	},
]
