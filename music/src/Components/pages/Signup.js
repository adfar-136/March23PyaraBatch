import React, { useState } from 'react'
import { useUser } from '../provider/UserProvider';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const [userInfo,setUserInfo] = useState({
        name:"",email:"",password:""
    })
    const navigate = useNavigate()
    const {signUpContext} = useUser()
    
    const handleChange =(e)=>{
        const {name,value} =e.target;
        setUserInfo({...userInfo,[name]: value})
    }
    const signUpp = async (userInfo)=>{
      const response  = await fetch(
        "https://academics.newtonschool.co/api/v1/user/signup",
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                projectID : "8nbih316dv01"
            },
            body:JSON.stringify({...userInfo,appType:"music"})
        }
      )
      const data = await response.json()
      console.log(data)
      const {token,data:{user:{name}}} = data;
      sessionStorage.setItem("authToken",token);
      sessionStorage.setItem("userInfo",name);
      signUpContext(token);
      navigate("/");
    }
    const handleSubmit=(e)=>{
       e.preventDefault()
       signUpp(userInfo)
    }
  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="">Name: </label>
        <input type="text" name='name' value={userInfo.name} onChange={handleChange}/>
        <label htmlFor="">Email: </label>
        <input type="text" name='email' value={userInfo.email} onChange={handleChange}/>
        <label htmlFor="">Password: </label>
        <input type="password" name="password" value={userInfo.password} onChange={handleChange}/>
        <input type="submit" value="SingUp" />
        <p>Already have an account?</p>
        <button onClick={()=>navigate("/signin")}>Signin</button>
    </form>
  )
}
