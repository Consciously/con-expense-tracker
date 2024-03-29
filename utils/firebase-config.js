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
	apiKey: REACT_APP_API_KEY,
	authDomain: REACT_APP_AUTH_DOMAIN,
	databaseURL: REACT_APP_DATABASE_URL,
	projectId: REACT_APP_PROJECT_ID,
	storageBucket: REACT_APP_STORAGE_BUCKET,
	messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
	appId: REACT_APP_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
