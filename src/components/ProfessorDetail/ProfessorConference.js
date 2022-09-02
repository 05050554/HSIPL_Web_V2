import React from 'react'
import { Conference } from '../ToolBox/GetTableData'
import {
    AllContain,
    HeaderTitleContain,
    HeaderTitle,
    TitleANDContain,
  } from "../ToolBox/StyledGlobale";
  import Divider from '@mui/material/Divider';
const ProfessorConference = () => {
  return (
    <AllContain id="Conference">
      <HeaderTitleContain>
        <HeaderTitle>Conference</HeaderTitle>
        <Divider   sx={{ bgcolor: "black" }}/>
      </HeaderTitleContain>
      <TitleANDContain>
        <Conference />
      </TitleANDContain>
    </AllContain>
  )
}

export default ProfessorConference