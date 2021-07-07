import styled, { createGlobalStyle } from 'styled-components'

// General
const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
		
    }
	body{
		background-color: #151515;
		color:white;		
	}
	*::-webkit-scrollbar {
		width: 12px;
		background-color: #3B3B3B;
	}
	*::-webkit-scrollbar-thumb
	{
		border-radius: 10px;
		background-color: #252525;
	}
	a{
		text-decoration:none;
		color:white;
	}
    
`
// Input
const Input = styled.input`
	color: ${(props) => props.color || 'black'};
	background: ${(props) => props.background || 'white'};
	border: ${(props) => props.border || '1px solid black'};
	border-radius: ${(props) => props.borderRadius || '5px'};
	width: ${(props) => props.width || '100%'};
	height: ${(props) => props.height || '30px'};
	align-self: ${(props) => props.align || 'stretch'};
	font-size: ${(props) => props.size || '.9rem'};
	padding: ${(props) => props.padding || '1%'};
	margin: ${(props) => props.margin || '0'};
	outline: ${(props) => props.outline || 'none'};
	background-image: ${(props) => `url(${props.backgrounfImg})` || null};
	background-repeat: ${(props) => props.backgroundRepeat || 'no-repeat'};
	background-size: ${(props) => props.backgroundSize || 'contain'};
	position: ${(props) => props.position || 'static'};
`

// Icon
const StyledIcon = styled.i`
	position: ${(props) => props.position || 'fixed'};
`
const Icon = (props) => {
	return <StyledIcon {...props} />
}

export { GlobalStyle, Input, Icon }
