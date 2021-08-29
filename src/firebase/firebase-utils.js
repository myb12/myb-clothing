import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBgerY-GpoxPmVQPatJhj_N3_FJxR0rinM",
  authDomain: "myb-clothing-db.firebaseapp.com",
  projectId: "myb-clothing-db",
  storageBucket: "myb-clothing-db.appspot.com",
  messagingSenderId: "542207531655",
  appId: "1:542207531655:web:cac386c841cf3be590f622",
  measurementId: "G-V76S4RQBH8",
};

firebase.initializeApp(config);

//===========storing auth user data in firebase==========//
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  // console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//for signing with Google Account
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
