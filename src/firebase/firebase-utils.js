import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyAQlbM0N7HMQqq7SpcbpT0EibfJWUUDTcI",
  authDomain: "crwn-db-579df.firebaseapp.com",
  projectId: "crwn-db-579df",
  storageBucket: "crwn-db-579df.appspot.com",
  messagingSenderId: "302655518966",
  appId: "1:302655518966:web:5c25f35e68335c116b54d7",
  measurementId: "G-XXCNBYCQ01"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
