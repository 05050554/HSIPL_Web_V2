import React from "react";
import styled from "styled-components";
import LabDirAvatar from "./LabDirAvatar";
import LabDirDescribe from "./LabDirDescribe";

const LabDirContent = styled.div`
  background-image: linear-gradient(45deg, #93a5cf 0%, #e2e2e2 100%);
  display: inline-flex;
  grid-template-columns: 3fr 5fr;
  @media (max-width: 900px) {
    display: grid;
    grid-template-rows: 3fr 5fr;
  }
`;

const LabDirector = () => {
  return (
    <LabDirContent>
      <LabDirAvatar />

      <LabDirDescribe />
    </LabDirContent>
  );
};

export default LabDirector;
