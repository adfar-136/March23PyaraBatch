import React, { useContext, useState } from 'react'
const userContext = React.createContext()
export default function UserProvider({children}) {
    const [user,setUser] = useState(null);
    const signUpContext = (userData) =>{
        setUser(userData);
        console.log(userData)
    }
    const signInContext = (userData)=>{
        setUser(userData);
        console.log(userData)
    }
    const signOutContext=()=>{
        setUser(null)
    }
    const value = {
        user,
        signUpContext,
        signInContext,
        signOutContext
    }
  return (
    <userContext.Provider value={value}>
        {children}
    </userContext.Provider>
  )
}
export function useUser(){
    return useContext(userContext)
}