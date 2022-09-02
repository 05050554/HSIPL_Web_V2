import React from "react";
import { ResearchEXP } from "../ToolBox/GetTableData";
import {
  AllContain,
  HeaderTitleContain,
  HeaderTitle,
  TitleANDContain,
} from "../ToolBox/StyledGlobale";
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
