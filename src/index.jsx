// Default export from a module
import React from 'react';

// Individual method exports from a module
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import firebase from 'firebase';

// CSS from a module
import 'bootstrap/dist/css/bootstrap.css';

// CSS from a local file
import './css/login14.scss';

// Default export from a local file
import DevTools from './components/shared/DevTools';
import configureStore from './store';

import TemplateContainer from './components/TemplateContainer';

// Initialize Firebase
var config = {
	apiKey: "AIzaSyAudYBAkgiC2bPN221TOTKpi-W3fHFimtg",
	authDomain: "test-3d6d5.firebaseapp.com",
	databaseURL: "https://test-3d6d5.firebaseio.com",
	projectId: "test-3d6d5",
	storageBucket: "test-3d6d5.appspot.com",
	messagingSenderId: "955611539641"
};
if (!firebase.apps.length) {
	firebase.initializeApp(config);
}


////////////// TO BE DELETED ////////////////////
/*
firebase.auth().signOut().then(function() {
  console.log('Signed Out');
}, function(error) {
  console.error('Sign Out Error', error);
});
*/
//////////////////////////////////////////////////


const Store = configureStore();

const renderApp = (Component) => {
	render(
	<AppContainer>
		<Provider store={Store}>
			<div>
				<Component />
				<DevTools />
			</div>
		</Provider>
	</AppContainer>,
	document.querySelector('#react-app'),
	);
};

renderApp(TemplateContainer);

if (module && module.hot) {
	module.hot.accept('./components/TemplateContainer', () => {
		renderApp(TemplateContainer);
	});
}