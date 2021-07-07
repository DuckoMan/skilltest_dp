import { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const StyledSlider = styled.section`
	position: relative;
	heigth: 100%;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`
const StyledSlide = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	transition: 0.3s;
`
const StyledSliderButton = styled.button`
	height: 100%;
	z-index: 3;
	cursor: pointer;
	background-color: transparent;
	color: white;
	background: none;
	border: 0px;
	padding: 2%;
	font-size: 2rem;
`
export const GameSlider = ({ slides }) => {
	if (!Array.isArray(slides) || slides.length <= 0) {
		return null
	}
	const [currentSlide, setCurrentSlide] = useState(0)
	const SlildesLength = slides.length

	const nextSlide = () => {
		setCurrentSlide(currentSlide === SlildesLength - 1 ? 0 : currentSlide + 1)
	}
	const prevSlide = () => {
		setCurrentSlide(currentSlide === 0 ? SlildesLength - 1 : currentSlide - 1)
	}

	return (
		<StyledSlider>
			<StyledSliderButton onClick={prevSlide}>&#10096; </StyledSliderButton>
			{slides.map((slide, index) => {
				return (
					<StyledSlide key={slide}>
						{index === currentSlide ? (
							<Image loading="eager" quality="100" src={slide} layout="fill" objectFit="cover" />
						) : null}
					</StyledSlide>
				)
			})}
			<StyledSliderButton onClick={nextSlide}>&#10097;</StyledSliderButton>
		</StyledSlider>
	)
}
