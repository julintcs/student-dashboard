import firebase from 'firebase';
const config = {
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

const auth = firebase.auth();

export {
  auth,
};