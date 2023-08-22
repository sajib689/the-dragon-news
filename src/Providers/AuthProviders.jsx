import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from './../Firebase/Firebase.init';
export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProviders = ({children}) => {
    const googleProvider = new GoogleAuthProvider()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
const googleSign = () => {
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
}
const formSign = (email, password) => {
    setLoading(true)
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
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}
const logOut = () => {
    setLoading(true)
    return signOut(auth)
}
useEffect(() => {
  const unSubscribe = onAuthStateChanged(auth, currentUser => {
   
    setUser(currentUser)
    setLoading(false)
    })
  return  () => {
    unSubscribe()
    }
   
},[])
    const authInfo = {
        user,
        formLogin,
        googleSign,
        formSign,
        logOut,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;