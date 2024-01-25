import React, { useState } from 'react'
import {ReactComponent as ProfileIcon} from "../../assets/profile.svg"
import { useUser } from '../provider/UserProvider'
import { useNavigate } from 'react-router-dom';
export default function Profile() {
  let userName = sessionStorage.getItem("userInfo")
  const {user,signOutContext} = useUser();
  const [showModal,setShowModal] = useState(false)
  const navigate = useNavigate()
  const handleSignOut=()=>{
     signOutContext()
     navigate("/signin")
  }
  return (
    <section className="profile" onClick={()=>setShowModal(!showModal)}>
      <section className="profile-icon">
        <ProfileIcon/>
      </section>
      <p style={{color:"white"}}>{user?userName:""}</p>
      {showModal && (
        <section className="auth-modal">
           {user ? (
            <button className='signin-btn' onClick={handleSignOut}>SignOut</button>
           ) : (
            <button className='signin-btn' onClick={()=>navigate("/signin")}>SignIn</button>
           )}
        </section>
      )}
    </section>
  )
}
