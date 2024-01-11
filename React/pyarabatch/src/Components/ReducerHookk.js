import React, { useReducer } from 'react'
const counterReducer =(state,action)=>{
     switch(action){
        case "one":
            return state+1;
        case "two":
            return state+2;
        case "three":
            return state+3;
        default:
            return state;
     }
}
export default function ReducerHookk() {
    const [state,dispatch] = useReducer(counterReducer,0)
  return (
    <div>
        <h1>{state}</h1>
        <button onClick={()=>dispatch("one")}>AddOne</button>
        <button onClick={()=>dispatch("two")}>AddTwo</button>
        <button onClick={()=>dispatch("three")}>AddThree</button>
        <button onClick={()=>dispatch("four")}>AddFourrr</button>
        <button onClick={()=>dispatch("fifth")}>AddOnerrr</button>
        <button onClick={()=>dispatch("sixth")}>AddOnerr</button>
        <button onClick={()=>dispatch("seventh")}>AddOnewwd</button>
    </div>
  )
}
