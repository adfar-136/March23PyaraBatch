import React, { useReducer, useState } from 'react'
const reducerCounter = (state,action)=>{
    console.log(state,action);
    if(action.type === "rohit"){
        return {count: state.count+1}
    } else if(action.type === "adfar"){
        return {count:state.count+2}
    } else if(action.type ==="guru"){
        return {count:state.count-1}
    } else if(action.type === "ankit"){
        return {count:state.count-2}
    } 
    return state;
   
}
export default function Reducerhook() {
    
    const [state,dispatch] = useReducer(reducerCounter,{count:0})
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={()=>{dispatch({type:"rohit"})}}>Add One</button>
      <button onClick={()=>{dispatch({type:"adfar"})}}>Add two</button>
      <button onClick={()=>{dispatch({type:"guru"})}}>sub one</button>
      <button onClick={()=>{dispatch({type:"ankit"})}}>sub two</button>
      <button onClick={()=>{dispatch({type:"Aryan"})}}>random</button>
    </div>
  )
}
