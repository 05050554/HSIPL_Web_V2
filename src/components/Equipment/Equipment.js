import React from "react";
import EquipmentOW from "./EquipmentOW";
import styled from "styled-components";
import {
  HeaderTitleContain,
  HeaderTitle,
  TitleANDContain,
} from "../StyledGlobale";

import Pushbloom from "./Pushbloom";
import SnapShot from "./SnapShot";
import Protable from "./Protable";

const EquipmentContain = styled.div`
  background-color: rgba(190, 192, 192, 0.8);
  width: 100%;
  padding-top: 7%;

  margin: auto;
`;

const Equipment = () => {
  return (
    <>
      <EquipmentContain id="Overview">
        <HeaderTitleContain>
          <HeaderTitle>Equipment</HeaderTitle>
        </HeaderTitleContain>
        <TitleANDContain>
          <EquipmentOW />
        </TitleANDContain>
      </EquipmentContain>
      <Pushbloom />
      <SnapShot />
      <Protable/>
    </>
  );
};

export default Equipment;
