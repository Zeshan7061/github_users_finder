import { createContext, useReducer } from 'react'
import { Feedback, initialStateType, IReducerInitialState } from './types'
import { feedbacks } from '../feedbacks'
import reducer from './reducer'

export const initialState: initialStateType = {
	feedbacks,
	selectedFeedback: null,
}

export const FeedbackContext = createContext(initialState as IReducerInitialState)

const FeedbackProvider: React.FC = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)

	const addFeedback = (feedback: Feedback) => {
		dispatch({
			type: 'ADD_FEEDBACK',
			payload: feedback,
		})
	}

	const removeFeedback = (id: string) => {
		dispatch({
			type: 'REMOVE_FEEDBACK',
			payload: {
				id,
			},
		})
	}

	const updateFeedback = (feedback: Feedback) => {
		dispatch({
			type: 'UPDATE_FEEDBACK',
			payload: feedback,
		})
	}

	return (
		<FeedbackContext.Provider
			value={{
				...state,
				dispatch,
				addFeedback,
				removeFeedback,
				updateFeedback,
			}}>
			{children}
		</FeedbackContext.Provider>
	)
}

export default FeedbackProvider
