import React from "react";
import {
  AllContain,
  HeaderTitleContain,
  HeaderTitle,
  TitleANDContain,
} from "../StyledGlobale";
import Divider from "@mui/material/Divider";
import styled from "styled-components";
import FX10 from "../../img/Equipments/FX10-1.png";
import FX102 from "../../img/Equipments/FX10-2.png";
import FX17 from "../../img/Equipments/FX17-1.png";
import FX172 from "../../img/Equipments/FX17-2.png";
import SnapScan1 from "../../img/Equipments/SnapScan-1.png";
import SnapScan2 from "../../img/Equipments/SnapScan-2.png";
import { Image } from "antd";
const SubTitle = styled.h3`
padding-top:8%;
`;

const ImgContain = styled.div`
  display: grid;
  grid-template-columns: 45% 45%;
  grid-gap: 10%;
  padding-bottom: 5%;
`;
export {ImgContain,SubTitle} ;
const Pushbloom = () => {
  return (
    <AllContain id="Pushbroom">
      <HeaderTitleContain>
        <HeaderTitle>Pushbroom</HeaderTitle>
        <Divider sx={{ bgcolor: "black" }} />
      </HeaderTitleContain>
      <TitleANDContain>
        <SubTitle id="fx10">Hyperspectral Camera — SPECIM FX10</SubTitle>
        <ImgContain>
          <Image src={FX10} loading="lazy"></Image>
          <Image src={FX102} loading="lazy"></Image>
        </ImgContain>
      </TitleANDContain>
      <TitleANDContain>
        <SubTitle id="fx17">Hyperspectral Camera — SPECIM FX17</SubTitle>
        <ImgContain>
          <Image src={FX17} loading="lazy"></Image>
          <Image src={FX172} loading="lazy"></Image>
        </ImgContain>
      </TitleANDContain>
      <TitleANDContain>
        <SubTitle id="snapscan">Hyperspectral Camera — imec SnapScan</SubTitle>
        <ImgContain>
          <Image src={SnapScan1} loading="lazy"></Image>
          <Image src={SnapScan2} loading="lazy"></Image>
        </ImgContain>
      </TitleANDContain>
    </AllContain>
  );
};

export default Pushbloom;
