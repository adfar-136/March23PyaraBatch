import React from 'react'
import {ReactComponent as ProfileIcon} from "../../assets/profile.svg"
import { useUser } from '../provider/UserProvider'
export default function Profile() {
  let userName = sessionStorage.getItem("userInfo")
  const {user} = useUser()
  return (
    <section className="profile">
      <section className="profile-icon">
        <ProfileIcon/>
      </section>
      <p style={{color:"white"}}>{user?userName:""}</p>
    </section>
  )
}
