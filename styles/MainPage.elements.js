import styled from 'styled-components'

const AppWrapper = styled.div`
	font-weight: 500;
	color: white;
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
`
const AppHeading = styled.div`
	padding: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
`
const HeadingLogo = styled.a`
	cursor: pointer;
	text-transform: uppercase;
	letter-spacing: 0.5rem;
	color: white;
	font-size: 1.7rem;
`
const SearchResults = styled.div`
	z-index: 1000;
	display: flex;
	position: absolute;
	width: 50%;
	min-height: 50px;
	flex-direction: column;
	top: 51px;
	max-height: 260px;
	overflow: auto;
	padding: 10px;
	background: #202020;
	color: white;
	text-decoration: none;
`
const ResultLink = styled.a`
	font-size: 15px;
	text-align: start;
	padding: 18px;
	cursor: pointer;
`
export { AppWrapper, AppHeading, HeadingLogo, SearchResults, ResultLink }
