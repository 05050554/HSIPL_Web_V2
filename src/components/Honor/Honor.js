import React from 'react'
import HonorCards from './HonorCards'
import styled from 'styled-components';
const HonorContain = styled.div`
  background-color: #f5f7f8;
  padding-bottom:3%;
`;
const HonorTitle = styled.h1`
  padding-top: 3%;
  text-align: left;
  margin-left: 5%;
  font-family: Signika, sans-serif;
`;


const Honor = () => {
  return (
    <HonorContain>
    <HonorTitle>Honor and Honor</HonorTitle>
    <HonorCards/>
    </HonorContain>
 
  )
}

export default Honor