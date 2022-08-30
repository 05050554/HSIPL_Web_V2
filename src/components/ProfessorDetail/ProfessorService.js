import React from 'react'
import {
    AllContain,
    HeaderTitleContain,
    HeaderTitle,
    TitleANDContain,
  } from "../StyledGlobale";
  import Divider from '@mui/material/Divider';
  import { ServiceTag } from '../GetTableData';
const ProfessorService = () => {
  return (
    <AllContain id="Service">
    <HeaderTitleContain>
      <HeaderTitle>Service</HeaderTitle>
      <Divider   sx={{ bgcolor: "black" }}/>
    </HeaderTitleContain>
    <TitleANDContain>
      <ServiceTag />
    </TitleANDContain>
  </AllContain>
  )
}

export default ProfessorService