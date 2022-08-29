import React from "react";
import { ResearchEXP } from "../GetTableData";
import {
  AllContain,
  HeaderTitleContain,
  HeaderTitle,
  TitleANDContain,
} from "../StyledGlobale";
import Divider from '@mui/material/Divider';
const PorfessorResearch = () => {
  return (
    <AllContain id = "Experience">
      <HeaderTitleContain>
        <HeaderTitle>Research Experience</HeaderTitle>
        <Divider  sx={{ bgcolor: "black" }}/>
      </HeaderTitleContain>
      <TitleANDContain>
        <ResearchEXP />
      </TitleANDContain>
    </AllContain>
  );
};

export default PorfessorResearch;
