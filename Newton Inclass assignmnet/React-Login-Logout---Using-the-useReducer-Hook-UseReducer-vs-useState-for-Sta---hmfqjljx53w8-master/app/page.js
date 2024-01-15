"use client"
import React, { useReducer } from 'react'

const reducer = (state, action) => {
   switch(action.type){
    case "USERNAME":
      return {
        ...state,username:action.usernameValue
      }
      
    case "PASSWORD":
      return {
        ...state,password:action.passwordValue
      }
    case "LOGIN":
      return {
        ...state,isLoggedIn:true,
      }
    case "ERROR":
      return {
        ...state,error:true
      }
    case "LOGOUT":
      return {
        isLoggedIn:false,error:false,username:"",password:""
      }
   }
}

function Home() {
  const [list,dispatch] = useReducer(reducer,{
    username:"",
    password:"",
    isLoggedIn:false,
    error:false
  })
  const handleUsername =(e)=>{
     dispatch({type:"USERNAME",usernameValue:e.target.value})
  }
  const handleEmail =(e)=>{
    dispatch({type:"PASSWORD",passwordValue:e.target.value})
  }
  const handleLogout =()=>{
    dispatch({type:"LOGOUT"});
  }
  const handleForm=(e)=>{
    e.preventDefault();
    if(list.username.length !== 0 && list.password.length !== 0){
      dispatch({type:"LOGIN"})
    } else {
      dispatch({type:"ERROR"})
    }
  }
  return (
    <div id="main">
     {list.isLoggedIn ? 
     <section className='logout-section'>
     <h2>Logged in successfully!</h2>
     <p>Welcome {list.username}</p>
     <button className='logout-btn' onClick={handleLogout}>Logout</button>
   </section> :
   <form className='login-form'>
    {list.error ? <p className='invalid-error'>Invalid username or password!</p> : null}
   {/*  */}
   <section className='username-input'>
     <label>Username: </label>
     <input type="text" placeholder='Username' className='username' 
     value={list.username} onChange={(handleUsername)}/>
   </section>
   <section className='password-input'>
     <label>Password: </label>
     <input type="password" placeholder='Password' className='password' 
     value={list.password} onChange={handleEmail}/>
   </section>
   <button className='login-btn' onClick={handleForm}>Login</button>
 </form>
   }
      
      
    </div>
  )
}

export default Home
