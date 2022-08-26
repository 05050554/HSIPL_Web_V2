import React from "react";
import Research_Item from "./Research_Item";
import styled from "styled-components";

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

const PosterTitle = styled.h1`
  color:white;
`

const Research_Posters = () => {
  return (
    <PosterContain>
      <PosterTitleDiv>
       <PosterTitle> Research Posters</PosterTitle>
        </PosterTitleDiv>
      <Research_Item />
    </PosterContain>
  );
};

export default Research_Posters;
