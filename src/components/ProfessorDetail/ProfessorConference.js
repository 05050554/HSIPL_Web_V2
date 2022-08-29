import React from 'react'
import { Conference } from '../GetTableData'
import {
    AllContain,
    HeaderTitleContain,
    HeaderTitle,
    TitleANDContain,
  } from "../StyledGlobale";
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