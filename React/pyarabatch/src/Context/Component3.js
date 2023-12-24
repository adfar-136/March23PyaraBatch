import React, { useContext } from 'react'
import { MyContext,FirstName } from '../AllContext'
export default function Component3() {
  const {state,setState,name,setName} = useContext(MyContext);
    
  return (
    <div>
       {/* <MyContext.Consumer>
        {({state,setState,name,setName})=>{
           return (
            <div>
              <h1>{state}</h1>
              <button onClick={() => setState('Hello World!')}>Change State</button><br/><br/>
            </div>
           )
        }}
       </MyContext.Consumer> */}
      <h1>{name}</h1>
      <button onClick={()=>setName("Adfarrr")}>Change</button>
      <h1>{state}</h1>
      <button onClick={()=>setState("Mustafa")}>Change</button>
    </div>
  )
}
