import React from "react";
import styled from "styled-components";
import LabDirAvatar from "./LabDirAvatar";
import LabDirDescribe from "./LabDirDescribe";

const LabDir = styled.div`
  padding-top: 5%;
  width: 100%;
  display: grid;
  overflow: hidden;
  background-image: linear-gradient(45deg, #93a5cf 0%, #e2e2e2 100%);
  @media(max-width: 1200px){
    padding-top: 13%;
  }

  @media(max-width: 900px){
    display: grid;
  }
`;

const LabDirContent = styled.div`
  display: inline-flex;
  justify-content: space-around;
  @media(max-width: 900px){
    display: grid;
  }
`;

const LabDirector = () => {
  return (
    <LabDir>
      <LabDirContent>
        <LabDirAvatar />
        <LabDirDescribe />
      </LabDirContent>
    </LabDir>
  );
};

export default LabDirector;
