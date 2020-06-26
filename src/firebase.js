import firebase from 'firebase/app';
import { firestore } from 'firebase/firestore';

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
