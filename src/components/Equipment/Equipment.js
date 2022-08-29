import React from 'react'
import EquipmentOW from './EquipmentOW'
import styled from 'styled-components';
import {
    HeaderTitleContain,
    HeaderTitle,
    TitleANDContain,
  } from "../StyledGlobale";

const EquipmentContain = styled.div`
 background-color:rgba(190,192,192,.8);
 width:100%;
 padding-top: 5%;

margin: auto;
`

const Equipment = () => {
   
  return (
    <EquipmentContain  id="Overview">
    <HeaderTitleContain>
      <HeaderTitle>Equipment</HeaderTitle>
    
    </HeaderTitleContain>
    <TitleANDContain>
      <EquipmentOW />
    </TitleANDContain>
  </EquipmentContain>
  )
}

export default Equipment