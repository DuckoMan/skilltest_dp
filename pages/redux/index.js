import { createStore } from 'redux'
import { rootReducer } from './rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createWrapper } from 'next-redux-wrapper'

const makeStore = () => {
	return createStore(rootReducer, composeWithDevTools())
}
export const wrapper = createWrapper(makeStore)
