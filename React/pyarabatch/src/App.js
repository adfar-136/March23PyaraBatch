import React from "react";
import Adfar from "./Components/ReactRouter/Adfar";
import Home from "./Components/ReactRouter/Home";
import About from "./Components/ReactRouter/About";
import Contact from "./Components/ReactRouter/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./Components/ReactRouter/User";
import Userdetails from "./Components/ReactRouter/Userdetails";
import Numbers from "./Components/ReactRouter/Numbers";
import Fsd from "./Components/ReactRouter/Fsd";
import DS from "./Components/ReactRouter/DS";
import MainHome from "./Components/ReactRouter/MainHome";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainHome />}>
          <Route index element={<Home/>}/>
          <Route path="/adfar" element={<Adfar />} />
          <Route path="/about" element={<About />}>
            <Route path="fsd" element={<Fsd />} />
            <Route path="ds" element={<DS />} />
          </Route>
          <Route path="/Contact/" element={<Contact />} />
          <Route path="/contact/:numbers" element={<Numbers />} />
          <Route path="/users" element={<User />} />
          <Route path="/users/:id/rohit/:adhaar" element={<Userdetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
