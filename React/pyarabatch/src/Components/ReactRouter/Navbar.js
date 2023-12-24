import React from 'react'
import { NavLink } from 'react-router-dom'
import "../../index.css"
export default function Navbar() {
  return (
    <div>
    <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/adfar">Adfar</NavLink></li>
      </ul>
    </div>
  )
}
