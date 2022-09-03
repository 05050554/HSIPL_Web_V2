import React from 'react'
import {
    AllContain,
    HeaderTitleContain,
    HeaderTitle,
    TitleANDContain,
  } from "../ToolBox/StyledGlobale";
  import Divider from '@mui/material/Divider';
  import { ServiceTag1,ServiceTag2,ServiceTag3 } from '../ToolBox/GetTableData';
const ProfessorService = () => {
  return (
    <AllContain id="Service">
    <HeaderTitleContain>
      <HeaderTitle>Service</HeaderTitle>
      <Divider   sx={{ bgcolor: "black" }}/>
    </HeaderTitleContain>
    <TitleANDContain>
    <ServiceTag1  header="國際研討會獲邀專題演講" num="1" />
      <ServiceTag2 header="特別議程主席" num="2" />
      <ServiceTag2 header="議程主席" num="3"/>
      <ServiceTag2 header="海報議程主席" num="4" />
      <ServiceTag2 header="議程委員" num="5" />
      <ServiceTag1  header="議程主持人" num="6" />
      <ServiceTag3  header="學術委員" num="7" />
      <ServiceTag3  header="Reviewers" num="8" />
    </TitleANDContain>
  </AllContain>
  )
}

export default ProfessorService

export function ProfessorServiceEdit() {
  return (
    <AllContain id="Service">
    <HeaderTitleContain>
      <HeaderTitle>Service</HeaderTitle>
      <Divider   sx={{ bgcolor: "black" }}/>
    </HeaderTitleContain>
    <TitleANDContain>
      <ServiceTag1  header="國際研討會獲邀專題演講" num="1" action="Edit"/>
      <ServiceTag2 header="特別議程主席" num="2" action="Edit"/>
      <ServiceTag2 header="議程主席" num="3" action="Edit"/>
      <ServiceTag2 header="海報議程主席" num="4" action="Edit"/>
      <ServiceTag2 header="議程委員" num="5" action="Edit"/>
      <ServiceTag1  header="議程主持人" num="6" action="Edit"/>
      <ServiceTag3  header="學術委員" num="7" action="Edit"/>
      <ServiceTag3  header="Reviewers" num="8" action="Edit"/>
    </TitleANDContain>
  </AllContain>
  )

}