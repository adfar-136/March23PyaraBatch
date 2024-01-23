import React, { useState } from 'react'
import { useUser } from '../provider/UserProvider';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
    const [userInfo,setUserInfo] = useState({
        email: "",password:""
    })
    const navigate = useNavigate("/")
    const {signInContext} = useUser()
    const handleChange =(e)=>{
        const {name,value} = e.target;
        setUserInfo({...userInfo,[name]: value});
    }
    const signInn =async (userInfo)=>{
       const response  = await fetch(
        "https://academics.newtonschool.co/api/v1/user/login",
        {
            method:"POST",
            headers: {
                "Content-Type":"application/json",
                projectID:"8nbih316dv01"
            },
            body:JSON.stringify({...userInfo,appType:"music"})
        }
       )
       const data = await response.json()
       console.log(data);
       const {token,data:{name}} = data;
       sessionStorage.setItem("authToken",token);
       sessionStorage.setItem("userInfo",name);
       signInContext(token);
       navigate("/")
    }
    const handleSubmit =(e)=>{
        e.preventDefault()
        signInn(userInfo)
    }
  return (
    <section>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Email: </label>
            <input type="text" name='email' value={userInfo.email}
            onChange={handleChange}/>
            <label htmlFor="">Password</label>
            <input type="password" name='password' value={userInfo.password}
            onChange={handleChange}/>
            <input type="submit" value="Signin" />
        </form>
        <p>Don't have an account?</p>
        <button onClick={()=>navigate("/signup")}>SignUp here</button>
    </section>
  )
}
