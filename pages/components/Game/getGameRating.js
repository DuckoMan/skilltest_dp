export const getGameRating = (rating) => {
	let gameRating = {
		rating: '-',
		color: '#808080',
	}
	const RATING_HIGH = 80
	const RATING_OK = 50
	const RATING_MIN = 0

	if (rating > RATING_HIGH) {
		return (gameRating = {
			rating,
			color: '#6c3',
		})
	}
	if (rating < RATING_HIGH && rating > RATING_OK) {
		return (gameRating = {
			rating,
			color: '#fc3',
		})
	}
	if (rating < RATING_OK && rating > RATING_MIN) {
		return (gameRating = {
			rating,
			color: '#f00',
		})
	}
	return gameRating
}
