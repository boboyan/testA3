// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDzdiCRyHLe1ZKKGVuKCGLSFMjaGTl79hc',
  authDomain: 'my-subscriptions-28c4b.firebaseapp.com',
  projectId: 'my-subscriptions-28c4b',
  storageBucket: 'my-subscriptions-28c4b.appspot.com',
  messagingSenderId: '657887791409',
  appId: '1:657887791409:web:e3750143425383eac84810'
};

const db = firebase.initializeApp(config);
export default db.firestore();
