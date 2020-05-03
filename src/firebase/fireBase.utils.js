import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCsWLddb0h4pveRNCP6S_P9vqzMF0AWUtQ",
  authDomain: "castle-clothing-db.firebaseapp.com",
  databaseURL: "https://castle-clothing-db.firebaseio.com",
  projectId: "castle-clothing-db",
  storageBucket: "castle-clothing-db.appspot.com",
  messagingSenderId: "985031282734",
  appId: "1:985031282734:web:f675829936cb70f1188fbf",
  measurementId: "G-10YPMRH9GF"
};

firebase.initializeApp(config);

export const createUserProfileDoc = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;