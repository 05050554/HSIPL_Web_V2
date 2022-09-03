import React from "react";
import { ProfessorEdu } from "../ToolBox/GetTableData";
import {
  AllContain,
  HeaderTitleContain,
  HeaderTitle,
  TitleANDContain,
} from "../ToolBox/StyledGlobale";
import { ButtonTop } from "../HomePage/Home";
import Divider from "@mui/material/Divider";
const ProfessorEducation = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <AllContain id="Education">
        <HeaderTitleContain>
          <HeaderTitle>Education</HeaderTitle>
          <Divider sx={{ bgcolor: "black" }} />
        </HeaderTitleContain>
        <TitleANDContain>
          <ProfessorEdu />
        </TitleANDContain>
      </AllContain>
      <ButtonTop onClick={handleClick}>TOP</ButtonTop>
    </>
  );
};

export default ProfessorEducation;

export function ProfessorEducationEdit() {
  return (
    <>
      <AllContain id="Education">
        <HeaderTitleContain>
          <HeaderTitle>Education</HeaderTitle>
          <Divider sx={{ bgcolor: "black" }} />
        </HeaderTitleContain>
        <TitleANDContain>
          <ProfessorEdu action="Edit" />
        </TitleANDContain>
      </AllContain>
    </>
  );
}
