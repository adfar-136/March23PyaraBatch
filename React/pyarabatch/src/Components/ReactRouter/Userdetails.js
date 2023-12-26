import React from 'react'
import { useParams } from 'react-router-dom'

export default function Userdetails() {
    const params = useParams()
    console.log(params)
  return (
    <div>
        <h1>User {params.id} {params.adhaar} details</h1>
    </div>
  )
}
