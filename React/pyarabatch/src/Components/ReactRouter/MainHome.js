import React from 'react'
import Navbar from './Navbar'
import "../../index.css"
import { Outlet } from 'react-router-dom'

export default function MainHome() {
  return (
    <div>
      <Navbar/>
      <h1>Adfar rarsrasrasastjy</h1>
      <Outlet/>
    </div>
  )
}
