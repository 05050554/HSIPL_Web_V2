import React from "react";
import { ProfessorEdu } from "../GetTableData";
import {
  AllContain,
  HeaderTitleContain,
  HeaderTitle,
  TitleANDContain,
} from "../StyledGlobale";
import Divider from '@mui/material/Divider';
const ProfessorEducation = () => {
  return (
    <AllContain id = "Education">
      <HeaderTitleContain>
        <HeaderTitle>Education</HeaderTitle>
        <Divider  sx={{ bgcolor: "black" }}/>
      </HeaderTitleContain>
      <TitleANDContain>
        <ProfessorEdu />
      </TitleANDContain>
    </AllContain>
  );
};

export default ProfessorEducation;
