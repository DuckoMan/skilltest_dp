import styled, { css } from 'styled-components'
import { Input } from '../Global.elements'

const StyledButton = styled(Input)`
	cursor: pointer;
	width: ${(props) => props.width || '60px'};
	height: ${(props) => props.height || '30px'};
	${(props) =>
		props.primary &&
		css`
			border-radius: ${(props) => props.br || '3px'};
			border: ${(props) => props.border || '1px solid white'};
			color: ${(props) => props.color || 'white'};
			background-color: ${(props) => props.background || '#202020'};
			&:hover {
				color: black;
				transition: 0.2s;
				background: white;
			}
		`}
`

export const Button = (props) => {
	return <StyledButton {...props} />
}
