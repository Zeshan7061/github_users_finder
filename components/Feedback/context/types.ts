export type Feedback = {
	id: string
	text: string
	date: Date
	rating: number
}

interface IFeedbackState {
	feedbacks: Feedback[] | null
	selectedFeedback: Feedback | null
}

export interface IReducerInitialState extends IFeedbackState {
	dispatch: React.Dispatch<any>
	addFeedback: (feedback: Feedback) => void
	removeFeedback: (id: string) => void
	updateFeedback: (feedback: Feedback) => void
}

export type initialStateType = IFeedbackState

export type Action =
	| {
			type: 'ADD_FEEDBACK'
			payload: Feedback
	  }
	| {
			type: 'SET_SELECTED_FEEDBACK'
			payload: Feedback
	  }
	| {
			type: 'REMOVE_FEEDBACK'
			payload: {
				id: string
			}
	  }
	| {
			type: 'UPDATE_FEEDBACK'
			payload: Feedback
	  }
