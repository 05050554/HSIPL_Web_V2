import React from "react";
import ResearchItem from "./Research_Item";
import styled from "styled-components";
import { ButtonTop } from "../HomePage/Home";
const PosterContain = styled.div`
  padding-top: 5%;
  background-color: #2d3a4b;
  display:flex;
  flex-wrap: wrap;

`;

const PosterTitleDiv = styled.div`
  text-align: left;
  margin-left: 5%;
  font-family: "Oswald", sans-serif;
  font-size: 1.8rem;
  color: white;
`;

export {PosterContain}

const PosterTitle = styled.h1`
  color:white;
`

const Research_Posters = () => {
  const handleClick =()=>{
    window.scrollTo(0, 0)
  }
  return (
    <PosterContain>
      <PosterTitleDiv>
       <PosterTitle> Research Posters</PosterTitle>
        </PosterTitleDiv>
      <ResearchItem />
      <ButtonTop onClick={handleClick}>TOP</ButtonTop>
    </PosterContain>
  );
};

export default Research_Posters;
