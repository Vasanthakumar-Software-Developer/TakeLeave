import React from "react";
import "./Home.css"
import {BrowserRouter as  Router,Routes,Route } from "react-router-dom";
import  Home  from "./Home";
import About from "./About";
import Apply from "./Apply";
import Admin from "./Admin";
import Reg from './Reg'
import { RoundedCorner } from "@material-ui/icons";
const App=(props)=>{
  return(
    <>
    <Router>
      <Routes>
       
        <Route path="/Home" element={<Home />} />
        <Route path="/Profile" element={<About />} />
        <Route path="/Admin"  element={<Admin />} />
        <Route path="/Apply" element={<Apply />} />
        <Route path="/" element={<Reg />} />
      </Routes>
    </Router>
  
    </>
  )
}
export default App;