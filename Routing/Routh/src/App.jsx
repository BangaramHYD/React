import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import {Routes,Route} from 'react-router'
import {Dashboard} from "../src/Rout/Dashboard"
import {Landing} from "../src/Rout/landingpage"
import { useNavigate } from "react-router-dom";
import './App.css'

function Appbar(){
  const navigate = useNavigate()

  return(
    <>
    <button onClick={()=>navigate("/")}>landing</button>
    <button onClick={()=>navigate("/dashboard")}>dashboard</button>
    </>
  )
}
function App() {
  

  return (
    <>
      <BrowserRouter>
      <Appbar></Appbar>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/" element={<Landing />} /> 
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
