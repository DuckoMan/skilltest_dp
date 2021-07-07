import { SET_GAMES_COUNT } from '../types'

export function setGamesCount(count) {
	return {
		type: SET_GAMES_COUNT,
		payload: { count: count },
	}
}
