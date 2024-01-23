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
    const value = {
        user,
        signUpContext,
        signInContext
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