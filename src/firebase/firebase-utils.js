import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBgerY-GpoxPmVQPatJhj_N3_FJxR0rinM",
  authDomain: "myb-clothing-db.firebaseapp.com",
  projectId: "myb-clothing-db",
  storageBucket: "myb-clothing-db.appspot.com",
  messagingSenderId: "542207531655",
  appId: "1:542207531655:web:cac386c841cf3be590f622",
  measurementId: "G-V76S4RQBH8"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//for signing with Google Account
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;