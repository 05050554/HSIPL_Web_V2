import React from "react";
import styled from "styled-components";
import HomePageImg from "../../assets/images/bg3.svg";
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

const ButtonTop = styled.button`
position: fixed;
bottom: 0;
right: 0;
margin-right:3%;
margin-bottom:2%;
z-index:10;
background-color: #204091;
color:white;
height: 3rem;
width: 3rem;
border-radius: 50%;
`
export {ButtonTop}
const Home = () => {
  const handleClick =()=>{
    window.scrollTo(0, 0)
  }
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
      <ButtonTop onClick={handleClick}>TOP</ButtonTop>
    </HomeContain>
  );
};

export default Home;
