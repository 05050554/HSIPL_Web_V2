import React from 'react'
import { Talks } from '../ToolBox/GetTableData'
import {
    AllContain,
    HeaderTitleContain,
    HeaderTitle,
    TitleANDContain,
  } from "../ToolBox/StyledGlobale";
  import Divider from '@mui/material/Divider';
const ProfessorTalks = () => {
  return (
    <AllContain id="Talks">
      <HeaderTitleContain>
        <HeaderTitle>Talks</HeaderTitle>
        <Divider  sx={{ bgcolor: "black" }}/>
      </HeaderTitleContain>
      
      <TitleANDContain>
        <Talks />
      </TitleANDContain>
    </AllContain>
  )
}

export default ProfessorTalks

export function ProfessorTalksEdit() {
  return (
    <AllContain id="Talks">
      <HeaderTitleContain>
        <HeaderTitle>Talks</HeaderTitle>
        <Divider  sx={{ bgcolor: "black" }}/>
      </HeaderTitleContain>
      
      <TitleANDContain>
        <Talks action="Edit"/>
      </TitleANDContain>
    </AllContain>
  )
  
}