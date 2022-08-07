import React from "react";
import Navbar from "../Navbar";
import styled from "styled-components";
import HomePageImg from "C:/Users/user/Desktop/HSIPL_WEB_Front-end/hsipl_web/src/assets/images/bg3.svg";
import HomeIntroduction from "./HomeIntroduction";

const HomeContain = styled.div`
  background-image: url(https://template101386.motopreview.com/mt-demo/101300/101386/mt-content/uploads/2020/05/mt-2019-bg-main.jpg);
`;

const HomeTitle = styled.h1`
  font-size: 3rem;
  font-family: Oswald;
  color: white;
  letter-spacing: 0.02em;
`;

const GridContain = styled.div`
  display: grid;
  grid-template-columns: 3fr 7fr;
  padding-top: 0%;
  @media (max-width: 1024px){
  
    width: 100%;
    padding-left:30%;
  
  }
  
`;

const HomePic = styled.img`
  width: 135%;
  margin-left: 2%;
  padding-top: 2%;
`;
const ImgContain = styled.div`
  overflow: hidden;
  @media (max-width: 1024px){
    display:none;
  }
`;



const Home = () => {
  return (
    <HomeContain id="Home">
      <HomeTitle>
        Hyperspectral Signal and Image Processing Laboratory
      </HomeTitle>
      <GridContain>
        <HomeIntroduction />
        <ImgContain>
          <HomePic src={HomePageImg}></HomePic>
        </ImgContain>
      </GridContain>
    </HomeContain>
  );
};

export default Home;
