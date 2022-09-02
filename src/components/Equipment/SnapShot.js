import React from 'react'
import {
    AllContain,
    HeaderTitleContain,
    HeaderTitle,
    TitleANDContain,
  } from "../ToolBox/StyledGlobale";
import { ImgContain,SubTitle } from './Pushbloom';
import Divider from "@mui/material/Divider";
import { Image } from "antd";
import SnapShot1 from "../../img/Equipments/SnapShot-1.png";
import SnapShot2 from "../../img/Equipments/SnapShot-2.png";
const SnapShot = () => {
  return (
    <AllContain id="SnapShot">
      <HeaderTitleContain>
        <HeaderTitle>SnapShot</HeaderTitle>
        <Divider sx={{ bgcolor: "black" }} />
      </HeaderTitleContain>
      <TitleANDContain>
        <SubTitle id="snapshot">Hyperspectral Camera — imec SnapShot</SubTitle>
        <ImgContain>
          <Image src={SnapShot1} loading="lazy"></Image>
          <Image src={SnapShot2} loading="lazy"></Image>
        </ImgContain>
      </TitleANDContain>

    </AllContain>
  )
}

export default SnapShot