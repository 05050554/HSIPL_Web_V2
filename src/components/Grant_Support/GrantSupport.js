import React from "react";
import GrantTable from "../GetTableData";

import {
  AllContain,
  HeaderTitleContain,
  HeaderTitle,
  TitleANDContain,
} from "../StyledGlobale";
import Divider from '@mui/material/Divider';
const GrantSupport = () => {
  return (
    <AllContain>
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