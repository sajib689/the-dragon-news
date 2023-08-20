import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import app from './../Firebase/Firebase.init';
export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProviders = ({children}) => {
    const googleProvider = new GoogleAuthProvider()
    const [user, setUser] = useState('')
const googleSign = () => {
    return signInWithPopup(auth,googleProvider)
}
const formSign = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
    .then( result => {
        const user = result.user
        console.log(user)
    })
    .catch(error => {
        console.error(error)
    })
}
const formLogin = (email,password) => {
    return signInWithEmailAndPassword(auth, email, password)
}
const signOut = () => {
    return signOut(auth)
    .then(() => {
      
    })
    .catch(error => {
      console.error(error.message)
    })
}
useEffect(() => {
  const unSubscribe = onAuthStateChanged(auth, currentUser => {
   
    setUser(currentUser)
    })
    unSubscribe()
},[])
    const authInfo = {
        user,
        formLogin,
        googleSign,
        formSign,
        signOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;