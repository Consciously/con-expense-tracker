import {
	REACT_APP_API_KEY,
	REACT_APP_AUTH_DOMAIN,
	REACT_APP_DATABASE_URL,
	REACT_APP_PROJECT_ID,
	REACT_APP_STORAGE_BUCKET,
	REACT_APP_MESSAGING_SENDER_ID,
	REACT_APP_APP_ID
} from '@env';
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
	apiKey: 'AIzaSyBEMmwiR77HG5yP20rMGaUmtyw8s8AcmNk',
	authDomain: 'con-expense-tracker.firebaseapp.com',
	databaseURL: 'https://con-expense-tracker-default-rtdb.firebaseio.com',
	projectId: 'con-expense-tracker',
	storageBucket: 'con-expense-tracker.appspot.com',
	messagingSenderId: '698672667977',
	appId: '1:698672667977:web:97ea6de3ab6e23aae74e98'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
