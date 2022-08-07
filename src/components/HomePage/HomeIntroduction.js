import React from "react";
import styled from "styled-components";
import camera from "../../img/LabDirector/camera.png";
import app from "../../img/LabDirector/mobile.png";
import web from "../../img/LabDirector/web.png";
const IntrodctionContain = styled.div``;

const GridContain = styled.div`
  display: grid;

`;

const OneGridContain = styled.div`
  display: flex;
  margin-bottom: 4%;
  padding-left: 15%;
  @media (max-width: 680px) {
    flex-direction: column;
    justify-self: center;
  }
`;

const Icon = styled.div`
  width: 100%;
  height: 100%;
  z-index: 2;
  display: grid;
  justify-items: center;
  border-radius: 1rem 1rem 1rem 1rem;
  box-shadow: 5px 5px 7px 7px rgba(0, 0, 0, 0.3);
  background-color: #526a8a;
  &:hover {
    transform: translateY(0%);
    background-image: linear-gradient(-225deg, #cbbacc 0%, #2580b3 100%);
    border-radius: 5% 0% 0% 5%;
  }
  &:hover + #Content {
    transition: all 1s;
    transform: translateX(0%);
    border-radius: 0% 1rem 1rem 0%;
  }

  @media (max-width: 680px){
  
    &:hover {
        transform: translateY(0%);
        background-image: linear-gradient(-225deg, #cbbacc 0%, #2580b3 100%);
        border-radius: 5% 5% 0% 0%;
      }
      &:hover + #Content {
        transition: all 1s;
        transform: translateX(0%);
        border-radius: 0% 0% 1rem 1rem;
  
  }
`;

const IconImg = styled.img`
  width: 50%;
  margin: 5%;
`;

const GridTitle = styled.h5`
  margin-bottom: 10%;
  color: #ffffff;
  font-size: 1.5rem;
  text-align: center;
  font-family: "Oswald", sans-serif;

  width: 12rem;
`;

const Content = styled.article`
  display: flex;
  font-size: 1rem;
  transform: translateX(-100%);

  z-index: 1;
  background-color: #ffffff;

  border-radius: 1rem;
  background-color: #d9f3ff;

  height: 100%;
  align-items: center;
  width: 100%;

  @media (max-width: 680px) {
    transform: translateX(0%);
    transform: translateY(-100%);
  }
`;

const Text = styled.p`
  width: 12rem;
  color: #000000;
  padding: 1rem;
  text-align: center;
  margin-bottom: 0em;
`;

const Intro = [
  {
    name: "HyperSpectral Imaging",
    img: camera,
    describe:
      "We dedicated to develop algorithms for hyperspectral, specifically for image classification, and target detection.",
  },
  {
    name: "Mobile Application",
    img: app,
    describe:
      " We develop the design and function implementation of mobile application.",
  },
  {
    name: " Web Development",
    img: web,
    describe: "We develop the design and function implementation of web pages.",
  },
];

const HomeIntroduction = () => {
  return (
    <IntrodctionContain>
      <GridContain>
        {Intro.map((item, index) => (
          <OneGridContain>
            <Icon>
              <IconImg src={item.img} href="#" alt={item.name}></IconImg>
              <GridTitle>{item.name}</GridTitle>
            </Icon>
            <Content id="Content">
              <Text>{item.describe}</Text>
            </Content>
          </OneGridContain>
        ))}
      </GridContain>
    </IntrodctionContain>
  );
};

export default HomeIntroduction;
