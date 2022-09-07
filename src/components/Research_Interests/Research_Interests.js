import React from "react";
import styled from "styled-components";
import ResearchInterestsDescribe from "./Research_Interests_Describe";
import ResearchInterestsCards from "./Research_Interests_Cards";
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
      <ResearchInterestsDescribe/>
      <ResearchInterestsCards/>
    </InterestsContent>
  );
};

export default Research_Interests;
