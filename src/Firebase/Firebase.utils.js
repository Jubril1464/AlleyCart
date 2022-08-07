import "firebase/compat/firestore"
import "firebase/compat/auth"
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
// import {getFirestore, collection,addDoc,where,query,getDocs} from 'firebase/firestore'

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
}
// export const createUserProfileDocument = async (userAuth, additionalData) => {
//   if (!userAuth) return;
//   console.log()

// }
// const db = getFirestore();
const app = initializeApp(config)
export const auth = getAuth(app)
export default app


