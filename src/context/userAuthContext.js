import { createContext, useContext, useEffect, useState } from "react"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth"
import { auth } from "../Firebase/Firebase.utils"
const userAuthContext = createContext()
export function UserAuthContextProvider({ children }) {
    const [user, setUser] = useState({});

  function logIn(email, password) {
      return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email, password) {
      return createUserWithEmailAndPassword(auth, email, password);
  }
  function logOut(email, password) {
      return signOut(auth);
    }
    function signInWithGoogle() {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
    }
  useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          console.log("Auth", currentUser)
          setUser(currentUser)
      });
      return () => {
          unsubscribe()
      }
  }, [])
    return (
        <userAuthContext.Provider value={{ user, logIn, signUp, logOut, signInWithGoogle }}>
            {children}

        </userAuthContext.Provider>
    )
}
export function useUserAuth() {
    return useContext(userAuthContext)
}