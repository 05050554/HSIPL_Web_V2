import React from "react";
import styled from "styled-components";
import Research_Interests_Describe from "./Research_Interests_Describe";
import Research_Interests_Cards from "./Research_Interests_Cards";
const InterestsContent = styled.div`
  background-color: #2d3a4b;
`;
const InterestsTitle = styled.h1`
  padding: 5% 0% 0% 5%;
  text-align: left;
  color: white;
`;

const Research_Interests = () => {
  return (
    <InterestsContent id="Interests">
      <InterestsTitle>Research Interests</InterestsTitle>
      <Research_Interests_Describe/>
      <Research_Interests_Cards/>
    </InterestsContent>
  );
};

export default Research_Interests;
