import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCQ3J-5yAYvggsjwnTygzN-rqjOCcFKEmg",
    authDomain: "crwn-db-3ebf0.firebaseapp.com",
    databaseURL: "https://crwn-db-3ebf0.firebaseio.com",
    projectId: "crwn-db-3ebf0",
    storageBucket: "crwn-db-3ebf0.appspot.com",
    messagingSenderId: "517974735033",
    appId: "1:517974735033:web:c8f3fd813d066bf2870368"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`/users/${userAuth.uid}`)

    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('Error creating user', error.message);
        }

    }
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters( { prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;