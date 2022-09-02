import React from "react";
import { JournalArt } from "../ToolBox/GetTableData";
import {
  AllContain,
  HeaderTitleContain,
  HeaderTitle,
  TitleANDContain,
} from "../ToolBox/StyledGlobale";
import Divider from '@mui/material/Divider';
const ProfessorArticles = () => {
  return (
    <AllContain id="Publication">
      <HeaderTitleContain>
        <HeaderTitle>Journal Articles</HeaderTitle>
        <Divider   sx={{ bgcolor: "black" }}/>
      </HeaderTitleContain>
      <TitleANDContain>
        <JournalArt />
      </TitleANDContain>
    </AllContain>
  );
};

export default ProfessorArticles;
