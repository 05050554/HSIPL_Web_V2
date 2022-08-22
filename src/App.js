import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import About_HSIPL from "./components/AboutHSIPL/AboutHSIPL";
import React from "react";
import Home from "./components/HomePage/Home";

import News from "./components/News/News";
import Honor from "./components/Honor/Honor";
import LabDirector from "./components/LabDirector/LabDirector";
import Research_Interests from "./components/Research_Interests/Research_Interests";
import Members from "./components/Members/Members";
import Footer from "./components/Footer";
import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
html{
  scroll-behavior: smooth;
  
}
`;

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      {/* <Navbar></Navbar>
     <Home></Home>
      <About_HSIPL></About_HSIPL> */}
      <Navbar></Navbar>
      <Home />
      <About_HSIPL />
      <News />
      <Honor />
      <LabDirector />
      <Research_Interests />
      <Members />
      <Footer />
    </div>
  );
}

export default App;
