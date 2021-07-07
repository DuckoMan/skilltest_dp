import styled, { css } from 'styled-components'
import { Input } from '../Global.elements'

const StyledInput = styled(Input)`
	${(props) =>
		props.main &&
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
		`};
`

export const TextField = (props) => {
	return <StyledInput {...props} />
}
