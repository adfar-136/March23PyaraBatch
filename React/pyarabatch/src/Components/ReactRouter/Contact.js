import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Contact() {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Contact's Page</h1>
      <button onClick={()=>navigate("/about")}>About Page</button>
      <button onClick={()=>navigate(-1)}>Backward Page</button>

    </div>
  )
}
