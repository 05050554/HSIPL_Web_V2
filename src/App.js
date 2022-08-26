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
import Research_Posters from "./components/Research_Posters/Research_Posters";
import ProfessorIntroView from "./components/ProfessorDetail/ProfessorIntroView";
import GrantSupport from "./components/Grant_Support/GrantSupport";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const GlobalStyles = createGlobalStyle`
html{
  scroll-behavior: smooth;
  
}
`;

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <BrowserRouter>
        <Routes path="/">
          <Route
            path="/"
            element={
              <>
                <Navbar /> <Home /> <About_HSIPL />
                <News />
                <Honor />
                <LabDirector />
                <Research_Interests />
                <Members />
                <Footer />
              </>
            }
          />
        </Routes>
        <Routes path="/LearnMore">
          <Route
            path="/LearnMore"
            element={
              <>
                <Navbar /> <Research_Posters /> <GrantSupport /> <Footer />
              </>
            }
          />
        </Routes>
        <Routes path="/ProfessorDetail">
          <Route
            path="/ProfessorDetail"
            element={
              <>
                <Navbar /> <ProfessorIntroView /> <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
