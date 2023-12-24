import React from 'react';
import Adfar from "./Components/ReactRouter/Adfar"
import Home from "./Components/ReactRouter/Home"
import About from "./Components/ReactRouter/About"
import Contact from "./Components/ReactRouter/Contact"
import { BrowserRouter, Routes,Route } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/adfar" element={<Adfar/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  )
}
