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
import NIR_G1 from "../../img/Equipments/NIR_G1.png";
import NIR_G12 from "../../img/Equipments/NIR_G1_Info.png";
import HP280_1 from "../../img/Equipments/HP280_1.png";
import HP280_2 from "../../img/Equipments/HP280_2.png";
const Protable = () => {
  return (
    <AllContain id="Protable">
      <HeaderTitleContain>
        <HeaderTitle>Protable</HeaderTitle>
        <Divider sx={{ bgcolor: "black" }} />
      </HeaderTitleContain>
      <TitleANDContain>
        <SubTitle id="nirg1">Near infrared spectrometer — NIRez-G1</SubTitle>
        <ImgContain>
          <Image src={NIR_G1} loading="lazy"></Image>
          <Image src={NIR_G12} loading="lazy"></Image>
        </ImgContain>
      </TitleANDContain>

      <TitleANDContain>
        <SubTitle id="hp280">Handheld snapshot hyperspectral camera — HP-280
</SubTitle>
        <ImgContain>
          <Image src={HP280_1} loading="lazy"></Image>
          <Image src={HP280_2} loading="lazy"></Image>
        </ImgContain>
      </TitleANDContain>

    </AllContain>
  )
}

export default Protable