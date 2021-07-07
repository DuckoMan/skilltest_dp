import styled from 'styled-components'
import Image from 'next/image'
import { Text } from '../../../styles/main/Text'
import { Flex } from '../../../styles/Flex'
import Link from 'next/link'
import { getGameRating } from './getGameRating'

const Card = styled.div`
	cursor: pointer;
	overflow: hidden;
	color: white;
	flex-direction: column;
	height: 350px;
	width: 400px;
	background: #202020;
	margin: 10px;
	border-radius: 10px;
	display: flex;
	@media (max-width: 420px) {
		width: 90%;
		margin: 10px 0px;
	}
`
const GameCardImage = styled.div`
	height: 60%;
	position: relative;
`
export const GameCard = ({ data }) => {
	return (
		<Link href={`/Game/[slug]`} as={`/Game/${data.slug}`}>
			<Card>
				<GameCardImage>
					<Image loading="lazy" quality="100" layout="fill" objectFit="cover" src={data.background_image} />
				</GameCardImage>
				<Flex padding="10px" direction="column">
					<Text weight="700" textAlign="start" width="100%" whiteSpace="nowrap" textOverflow="ellipsis">
						{data.name}
					</Text>
					<Text
						size="15px"
						color={getGameRating(data.metacritic).color}
						border={`2px solid ${getGameRating(data.metacritic).color}`}
						weight="700"
						padding="5px"
						width="30px"
						margin="10px 0px"
					>
						{getGameRating(data.metacritic).rating}
					</Text>
					<Text size="15px">
						Released: <strong>{data.released.replace(/-/g, ' ')}</strong>
					</Text>
				</Flex>
			</Card>
		</Link>
	)
}
