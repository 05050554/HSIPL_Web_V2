import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import About_HSIPL from "./components/AboutHSIPL/AboutHSIPL";
import React from "react";
import Home from "./components/HomePage/Home";

import News from "./components/News/News";
import Honor from "./components/Honor/Honor";
import LabDirector from "./components/LabDirector/LabDirector";
import Members from "./components/Members/Members";
import  { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
html{
  scroll-behavior: smooth;
  
}
`

function App() {
  return (
    <div className="App">
     <GlobalStyles/>
     {/* <Navbar></Navbar>
     <Home></Home>
      <About_HSIPL></About_HSIPL> */}
      <Navbar></Navbar>
      <Home />
      <About_HSIPL />
      <News/>
      <Honor/>
      <LabDirector/>
      <Members/>
 
    </div>
  );
}

export default App;
