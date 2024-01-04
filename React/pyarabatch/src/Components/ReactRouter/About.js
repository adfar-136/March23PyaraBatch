import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export default function About() {
  const navigate = useNavigate()
  return (
    <div>
      <h1>About's Page</h1>
      <button onClick={()=>navigate("/contact")}>Contact Page</button>
      <Outlet/>
    </div>
  )
}
