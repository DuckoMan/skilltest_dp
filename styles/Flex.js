import styled from 'styled-components'

export const StyledFlex = styled.div`
	display: flex;
	width: ${(props) => props.width || ''};
	height: ${(props) => props.height || ''};
	flex-direction: ${(props) => props.direction || 'row'};
	flex-wrap: ${(props) => props.wrap || 'wrap'};
	justify-content: ${(props) => props.justify || 'stretch'};
	align-items: ${(props) => props.align || 'stretch'};
	margin: ${(props) => props.margin || '0px'};
	padding: ${(props) => props.padding || '0px'};
	max-width: ${(props) => props.maxWidth || 'none'};
	background-color: ${(props) => props.backgroundColor || ''};
	border-radius: ${(props) => props.borderRadius || '0px'};
`
export const Flex = (props) => {
	return <StyledFlex {...props} />
}
