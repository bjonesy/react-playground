import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Blog from './containers/Blog';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<Blog />
	</Provider>, 
	document.getElementById('root')
);
registerServiceWorker();