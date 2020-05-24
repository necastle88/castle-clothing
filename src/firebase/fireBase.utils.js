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

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })
 return transformedCollection.reduce((acc, collection) => {
   acc[collection.title.toLowerCase()] = collection;
   return acc;
 }, {});
}; 

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const usubscribe = auth.onAuthStateChanged(userAuth => {
      usubscribe();
      resolve(userAuth);
    }, reject)
  })
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;