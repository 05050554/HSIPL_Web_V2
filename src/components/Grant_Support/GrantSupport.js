import React from "react";
import GrantTable from "../ToolBox/GetTableData";

import {
  AllContain,
  HeaderTitleContain,
  HeaderTitle,
  TitleANDContain,
} from "../ToolBox/StyledGlobale";
import Divider from '@mui/material/Divider';
const GrantSupport = () => {
  return (
    <AllContain id="Projects">
      <HeaderTitleContain>
        <HeaderTitle>Grant Support and Projects</HeaderTitle>
        <Divider  sx={{ bgcolor: "black" }}/>
      </HeaderTitleContain>
      <TitleANDContain>
        <GrantTable />
      </TitleANDContain>
    </AllContain>
  );
};

export default GrantSupport;

export function GrantSupportEdit() {
  return (
    <AllContain>
      <HeaderTitleContain>
        <HeaderTitle>Grant Support and Projects</HeaderTitle>
        <Divider  sx={{ bgcolor: "black" }}/>
      </HeaderTitleContain>
      <TitleANDContain>
        <GrantTable action="Edit"/>
      </TitleANDContain>
    </AllContain>
  );
}
