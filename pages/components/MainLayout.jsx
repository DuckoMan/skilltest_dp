import Head from 'next/head'
import React, { useState } from 'react'
import styled from 'styled-components'
import { AppHeading, HeadingLogo, SearchResults, ResultLink } from '../../styles/MainPage.elements'
import { TextField } from '../../styles/main/TextField'
import Link from 'next/link'
import { useSelector } from 'react-redux'

const StyledMainLayout = styled.div`
	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap');
	font-family: 'Poppins', sans-serif;
`
export const MainLayout = ({ children, title = 'Game stock' }) => {
	const [searchValue, setSearchValue] = useState('')
	const [foundResults, setFoundResults] = useState([])
	const gamesState = useSelector((state) => state.games)

	return (
		<>
			<Head>
				<meta name="keywords" content="GameShowcase VideoGames" />
				<meta name="description" content="Game showcase" />
				<meta charSet="utf-8" />
				<title>GameStock | {title}</title>
			</Head>
			<StyledMainLayout>
				<AppHeading>
					<Link href="/">
						<HeadingLogo>GS</HeadingLogo>
					</Link>
					<TextField
						value={searchValue}
						onChange={async (e) => {
							setSearchValue(e.target.value)
							const responce = await fetch(
								`https://api.rawg.io/api/games?key=a0712565c5684a0a8265448309452198&search=${searchValue}`,
							)
							if (responce) {
								const data = await responce.json()
								setFoundResults(data.results)
							}
						}}
						placeholder={`Search ${gamesState.count} games`}
						background="hsla(0,0%,100%,.16)"
						color="hsla(0,0%,100%,.6)"
						width="90%"
						margin="auto 0"
						borderRadius="40px"
						padding="20px"
					/>
					{searchValue.length > 0 && (
						<SearchResults>
							{foundResults.map((elem) => (
								<Link key={elem.id} href={`/Game/${elem.slug}`}>
									<ResultLink>{elem.name}</ResultLink>
								</Link>
							))}
						</SearchResults>
					)}
				</AppHeading>
				{children}
			</StyledMainLayout>
		</>
	)
}
