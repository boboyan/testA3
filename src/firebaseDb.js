// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcfHjMVn1VDIEa5PWJfrG_dNmRgYspFo8",
  authDomain: "my-subscriptions1-fddf5.firebaseapp.com",
  projectId: "my-subscriptions1-fddf5",
  storageBucket: "my-subscriptions1-fddf5.appspot.com",
  messagingSenderId: "215323051687",
  appId: "1:215323051687:web:ef32acb953d7cbe9d9fd82"
};

const db = firebase.initializeApp(config);
export default db.firestore();
