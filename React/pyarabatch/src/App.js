import React, { useState } from 'react'
import { FirstName,MyContext } from './AllContext'
import  Component1  from './Context/Component1'
export default function App() {
  const [state,setState]=useState("Adfar")
  const [name,setName] = useState("Guru")
  return (
    <div>
      <FirstName.Provider value="Adfar Rashid">
        <MyContext.Provider value={{state,setState,name,setName}}>
           <Component1/>
        </MyContext.Provider>          
      </FirstName.Provider>
    </div>
  )
}
