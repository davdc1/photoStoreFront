import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIM,
    projectId: process.env.REACT_APP__PROJECT_ID,
    storageBucket: process.env.REACT_APP__STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP__APP_ID
  };

export const app = firebase.initializeApp(firebaseConfig)

export const auth = app.auth();
export default firebase