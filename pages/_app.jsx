/* eslint-disable react/prop-types */
import React from 'react'
import { GlobalStyle } from '../styles/Global.elements'
import { wrapper } from './redux'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	)
}

export default wrapper.withRedux(MyApp)
