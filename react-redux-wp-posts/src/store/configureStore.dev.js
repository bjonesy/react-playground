import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';

import rootReducer from '../reducers';

const configureStore = preloadedState => {
	const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(
			promise(),
			thunk,
			createLogger()
		)
	)

);

	return store;
}

export default configureStore;