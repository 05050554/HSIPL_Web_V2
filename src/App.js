import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import About_HSIPL from "./components/About_HSIPL";
import React from "react";
import Home from "./components/HomePage/Home";

import News from "./components/News";

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
    </div>
  );
}

export default App;
