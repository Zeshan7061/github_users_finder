import { initialState } from './context'
import { Action, initialStateType } from './types'

const reducer = (state: initialStateType = initialState, action: Action) => {
	switch (action.type) {
		case 'ADD_FEEDBACK': {
			const feedbacks = state.feedbacks || []
			return {
				...state,
				feedbacks: [action.payload, ...feedbacks],
			}
		}
		case 'REMOVE_FEEDBACK': {
			const feedbacks = state.feedbacks || []
			return {
				...state,
				feedbacks: feedbacks.filter(fb => fb.id !== action.payload.id),
			}
		}
		case 'SET_SELECTED_FEEDBACK':
			return { ...state, selectedFeedback: action.payload }
		case 'UPDATE_FEEDBACK': {
			const feedbacks = state.feedbacks || []
			const index = feedbacks.findIndex(fb => fb.id === action.payload.id)
			if (index === -1) return state

			return {
				...state,
				feedbacks: [
					...feedbacks.slice(0, index),
					action.payload,
					...feedbacks.slice(index + 1),
				],
				selectedFeedback: null,
			}
		}
		default:
			return state
	}
}

export default reducer
