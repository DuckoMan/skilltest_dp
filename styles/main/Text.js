import styled from 'styled-components'

const StyledText = styled.span`
	color: ${(props) => props.color};
	font-size: ${(props) => props.size || '20px'};
	font-weight: ${(props) => props.weight || 500};
	background: transparent;
	text-align: ${(props) => props.textAlign || 'center'};
	width: ${(props) => props.width || 'auto'};
	height: ${(props) => props.height || 'auto'};
	padding: ${(props) => props.padding || '0px'};
	margin: ${(props) => props.margin || '0px'};
	border: ${(props) => props.border || 'none'};
	border-radius: ${(props) => props.borderRadius || '3px'};
	overflow: ${(props) => props.overflow || 'hidden'};
	cursor: ${(props) => props.cursor || 'initial'};
	text-overflow: ${(props) => props.textOverflow || 'clip'};
	white-space: ${(props) => props.whiteSpace || 'none'};
`

export const Text = (props) => {
	return <StyledText {...props} />
}
