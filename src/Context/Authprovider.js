import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from "firebase/auth"
import app from "../firebase/firebase.config"


export const authContext = createContext()
const auth = getAuth(app)

const Authprovider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

     
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword (auth, email, password)
    }

    const loginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

   const userUpdet = (UserInfo) =>{
    return updateProfile(auth.currentUser, UserInfo)
   }


   const userlogOut = () =>{
    return signOut(auth)
   }


        useEffect(() =>{      
            const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
                  setUser(currentUser)
                  setLoading(false)
                  console.log(currentUser);
              })
              return () =>{
                  unsubscribe()
              }
          },[])
  


    const authInfo = {
        createUser, loginUser, user, userUpdet, userlogOut, loading
    }



    return (
       <div>
      <authContext.Provider value={authInfo}>
        {children}
      </authContext.Provider>
       </div>
    );
};

export default Authprovider;