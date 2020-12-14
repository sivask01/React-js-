import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDr3KWKMhkux6eWzYhdKip7FQ-FT-3ry0U",
    authDomain: "crwn-clothing-eb70c.firebaseapp.com",
    projectId: "crwn-clothing-eb70c",
    storageBucket: "crwn-clothing-eb70c.appspot.com",
    messagingSenderId: "1025144929632",
    appId: "1:1025144929632:web:8aadadff736c2924f57205",
    measurementId: "G-KVC6HZ4ZBB"
  };

export const createUserProfileDocument = async (userAuth, additionalDetails) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if(!snapshot.exists){
    const { displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalDetails })
    } catch (error) {
      console.log("error creating user", error.message); 
    }
  }
  return userRef
}

export const addCollectionAndDocuments = (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey)
  console.log(collectionRef);
}
  
  firebase.initializeApp(firebaseConfig);
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'})
  export const SignInWithGoogle =  () => auth.signInWithPopup(provider)

  export default firebase;
