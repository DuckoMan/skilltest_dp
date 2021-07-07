import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'
import { Flex, StyledFlex } from '../../styles/Flex'
import { MainLayout } from '../components/MainLayout'
import parse from 'html-react-parser'
import { Text } from '../../styles/main/Text'
import { GameSlider } from '../components/Game/GameSlider'
import styled from 'styled-components'

const GameScreen = styled(StyledFlex)`
	@media (max-width: 1200px) {
		width: 70%;
	}
	@media (max-width: 904px) {
		width: 90%;
	}
`
export default function Game({ game }) {
	const [gameData, setGameData] = useState(game)
	const router = useRouter()

	useEffect(() => {
		const load = async () => {
			const gameData_response = await fetch(
				`https://api.rawg.io/api/games/${router.query.slug}?key=a0712565c5684a0a8265448309452198`,
			)
			const data = await gameData_response.json()

			setGameData(data)
		}
		if (!game) {
			load()
		}
	}, [router])

	if (!gameData) {
		return (
			<MainLayout title="Loading ⌛">
				<Flex width="100%" height="100vh" justify="center" align="center">
					Loading...⌛
				</Flex>
			</MainLayout>
		)
	}
	return (
		<MainLayout title={gameData.name}>
			<Flex width="100%" height="100vh" justify="center" align="center">
				<GameScreen
					borderRadius="10px"
					backgroundColor="#202020"
					height="700px"
					width="50%"
					flexDirection="column"
					justify="center"
					align="center"
				>
					<Text size="1.5rem" width="100%" margin="10px 0px 0px 0px">
						{gameData.name}
					</Text>
					<Flex width="90%" height="50%">
						{/* !!! Я не нашел ссылки на скрины из игр в API, поэтому добавил те фото, который прилагались к оглавлению */}
						<GameSlider slides={[gameData.background_image, gameData.background_image_additional]} />
					</Flex>
					<Text overflow="auto" height="20%" textAlign="justify" margin="25px" padding="10px" size="1.1rem">
						{parse(gameData.description)}
					</Text>
					{gameData.website ? (
						<Text
							onClick={() => {
								router.push(gameData.website)
							}}
							size="17px"
							color="gray"
							margin="0px 0px 10px 0px"
							height="5%"
							width="100%"
							cursor="pointer"
						>
							{gameData.website}
						</Text>
					) : (
						<Text size="17px" color="gray" margin="0px 0px 10px 0px" height="5%" width="100%" cursor="pointer">
							Ссылка на веб-сайт игры отсутствует :(
						</Text>
					)}
				</GameScreen>
			</Flex>
		</MainLayout>
	)
}

Game.getInitialProps = async (ctx) => {
	if (!ctx.req) {
		return { game: null }
	}
	const responce = await fetch(`https://api.rawg.io/api/games/${ctx.query.slug}?key=a0712565c5684a0a8265448309452198`)
	const game = await responce.json()

	return { game }
}
