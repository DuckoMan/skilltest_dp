import { SET_GAMES_COUNT } from '../types'

const initState = {
	count: '...',
}

export const gameReducer = (state = initState, action) => {
	switch (action.type) {
		case SET_GAMES_COUNT:
			return { ...state, count: action.payload.count }
		default:
			return state
	}
}
