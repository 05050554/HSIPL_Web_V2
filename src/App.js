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
import Equipment from "./components/Equipment/Equipment";
import Login from "./components/Login/Login";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import PrivateRoute from "./components/Login/PrivateRoute";
import Edit from "./components/Edit/Edit";
const GlobalStyles = createGlobalStyle`
html{
  scroll-behavior: smooth;
  
}
`;

function App() {
  const PreivateContain = [
    { path: "/Edit", component: Edit },
    // { path: "/home", component: Home },
  ];

  return (
    <div>
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
                <Navbar /> <Research_Posters /> <GrantSupport /> <Equipment />{" "}
                <Footer />
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
        <Routes path="/Login">
          <Route path="/Login" element={<Login />} />
          <Route path="/Edit" element={<PrivateRoute />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
