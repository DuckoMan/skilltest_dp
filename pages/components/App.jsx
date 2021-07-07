import { useEffect, useState } from 'react'
import { MainLayout } from './MainLayout'
import { Flex } from '../../styles/Flex'
import { GameCard } from './Game/GameCard'
import { Text } from '../../styles/main/Text'
import { AppWrapper } from '../../styles/MainPage.elements'
import { platforms } from './Game/platforms'

export const App = ({ Games }) => {
	const [GameList, setGameList] = useState(Games.results)
	const [currentPage, setCurrentPage] = useState(2)
	const [fetching, setFetching] = useState(false)
	const [activePlatforms, setActivePlatforms] = useState([platforms.PC, platforms.Xbox, platforms.PS])
	const [filterRating, setFilterRating] = useState('')
	const [filterDate, setFilterDate] = useState('')

	const handleScroll = (e) => {
		if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
			setFetching(true)
		}
	}
	useEffect(() => {
		document.addEventListener('scroll', handleScroll)
		return function () {
			document.removeEventListener('scroll', handleScroll)
		}
	}, [])

	useEffect(() => {
		if (fetching !== false) {
			const loadData = async () => {
				try {
					const responce = await fetch(
						`https://api.rawg.io/api/games?key=a0712565c5684a0a8265448309452198&platforms=${activePlatforms}&page=${currentPage}${filterDate}${filterRating}`, // ключ и ссылка должны храниться где-нибудь в .env или в любом другом месте с глобальным доступом
					)
					const data = await responce.json()
					setGameList([...GameList, ...data.results])
				} catch (e) {
					console.log(e)
				} finally {
					setCurrentPage((prevState) => prevState + 1)
					setFetching(false)
				}
			}
			loadData()
		}
	}, [fetching])

	// Filters
	const filterPlatform = (platform) => {
		setGameList([])
		setCurrentPage(1)
		if (platform === activePlatforms) {
			setActivePlatforms([platforms.PC, platforms.Xbox, platforms.PS])
			setFetching(true)
			return
		}
		setActivePlatforms(platform)
		setFetching(true)
	}
	const filterByRating = () => {
		// !!! Не нашел способ сортировки по рейтингу (по порядку) через API, но,думаю, если там такой параметр есть, то работать это будет по той же механике, что я написал
		setGameList([])
		setCurrentPage(1)
		if (filterRating === '') {
			setFilterRating('&metacritic=0,100')
			setFetching(true)
			return
		}
		setFilterRating('')
		setFetching(true)
	}
	const filterByDateOfRelease = () => {
		// !!! Не нашел способ сортировки по дате релиза (по порядку) через API, но,думаю, если там такой параметр есть, то работать это будет по той же механике, что я написал
		setGameList([])
		setCurrentPage(1)
		if (filterDate === '') {
			setFilterDate('&dates=2010,2021')
			setFetching(true)
			return
		}
		setFilterRating('')
		setFetching(true)
	}
	return (
		<MainLayout title="Home 🏠">
			<AppWrapper>
				<Flex margin="1% 0px" justify="center">
					<Text padding="10px" wisth="100%" size="3rem">
						New and Trending🎯
					</Text>
					<Text padding="0px 0px 10px 0px" width="100%" size="1rem">
						Based on player counts and release date
					</Text>
					<Flex margin="15px" width="100%" align="center" justify="center">
						<Text
							onClick={() => {
								filterPlatform(platforms.PC, 'PC')
							}}
							padding="3px"
							cursor="pointer"
							border="3px solid #CC3300"
							margin="0px 5px"
							color={activePlatforms == platforms.PC ? '#fff' : '#CC3300'}
						>
							PC
						</Text>
						<Text
							onClick={() => {
								filterPlatform(platforms.PS, 'PS')
							}}
							padding="3px"
							cursor="pointer"
							border="3px solid #6699FF"
							margin="0px 5px"
							color={activePlatforms == platforms.PS ? '#fff' : '#6699FF'}
						>
							PS
						</Text>
						<Text
							onClick={() => {
								filterPlatform(platforms.Xbox, 'Xbox')
							}}
							padding="3px"
							cursor="pointer"
							border="3px solid #009900"
							margin="0px 5px"
							ститьдолжны
							хрн
							color={activePlatforms == platforms.Xbox ? '#fff' : '#009900'}
						>
							XBOX
						</Text>
						<Text
							onClick={() => {
								filterByRating()
							}}
							padding="3px"
							cursor="pointer"
							border="3px solid gray"
							margin="0px 5px"
							color="gray"
						>
							Sort by Rating
						</Text>
						<Text
							onClick={() => {
								filterByDateOfRelease()
							}}
							padding="3px"
							cursor="pointer"
							border="3px solid gray"
							margin="5px 5px"
							color="gray"
						>
							Sort by Realease Date
						</Text>
					</Flex>
					<Flex maxWidth="1260px" justify="center">
						{GameList.map((item) => {
							return <GameCard key={item.id} data={item} />
						})}
					</Flex>
				</Flex>
				<Text margin="0px 0px 10px 0px">Loading...⌛</Text>
			</AppWrapper>
		</MainLayout>
	)
}
