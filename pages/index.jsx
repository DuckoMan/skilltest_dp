import React, { useEffect } from 'react'
import { App } from './components/App'
import config from 'config'
import { useDispatch } from 'react-redux'
import { setGamesCount } from './redux/actions/gameActions'

export default function Home({ Games }) {
	const dispatch = useDispatch()
	useEffect(() => {
		const gameCount = Games.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
		dispatch(setGamesCount(gameCount))
	}, [])
	return <App Games={Games} />
}

export async function getServerSideProps({ req }) {
	if (!req) {
		return { tags: null }
	}
	const pageNumber = 1

	const responce = await fetch(
		`${config.get('GET_LIST_OF_GAMES')}?key=${config.get('RAWG_API_KEY')}&page=${pageNumber}`,
	)
	const games = await responce.json()

	return {
		props: {
			Games: games,
		},
	}
}
