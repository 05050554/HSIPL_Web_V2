import React from 'react'
import styled from 'styled-components'
import logo from "../assets/images/LOGO_1.png";

const AboutContain = styled.div`
 
  // height:100vh;

  background-color:yellow;
  // padding-top:7vh
`;

const About_HSIPL = () => {
  return (
    <>
    <AboutContain id="About_HSIPL">This page is About_HSIPL</AboutContain>
    {/* <img src={logo}></img> */}
    </>
  )
}

export default About_HSIPL