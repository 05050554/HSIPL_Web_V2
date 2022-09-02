import React from 'react'
import { ProfessorAward } from '../ToolBox/GetTableData'
import {
    AllContain,
    HeaderTitleContain,
    HeaderTitle,
    TitleANDContain,
  } from "../ToolBox/StyledGlobale";
  import Divider from '@mui/material/Divider';
const ProfessorAwards = () => {
  return (
    <AllContain id="Awards">
      <HeaderTitleContain>
        <HeaderTitle>Awards</HeaderTitle>
        <Divider  sx={{ bgcolor: "black" }}/>
      </HeaderTitleContain>
      <TitleANDContain>
        <ProfessorAward />
      </TitleANDContain>
    </AllContain>
  )
}

export default ProfessorAwards