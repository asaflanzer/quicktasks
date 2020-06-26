import firebase from 'firebase/app';
import { firestore } from 'firebase/firestore';

const fbConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyCCG4tvuRuLan9DaWP3p28LEznpzmqC1NI',
  authDomain: 'todoist-app-68f61.firebaseapp.com',
  databaseURL: 'https://todoist-app-68f61.firebaseio.com',
  projectId: 'todoist-app-68f61',
  storageBucket: 'todoist-app-68f61.appspot.com',
  messagingSenderId: '164744566421',
  appId: '1:164744566421:web:c6b6a3b8e76e6130886d9c',
});

export { firebaseConfig as firebase };
