import React from "react";
import styled from "styled-components";
import Professor_img from "../../img/Professor/Professor_img.jpg";
const LabAvatarContent = styled.div`
  display: grid;
  flex: 2;
  align-items: center;
`;
const LabTitle = styled.h1`
  font-family: Oswald;
  letter-spacing: 0.2rem;
  font-size: 3rem;
  font-weight: bold;
  align-items: center;
  display: grid;
  justify-items: center;
  padding: 2% 0%;
  text-align: center;
`;

const ProfImage = styled.img`
  margin-bottom: 5%;
  width:50%;
  align-items: center;
  margin-left: 0;
  border-radius: 25%;
  border: solid white 0.5rem;
  display: grid;
  justify-self: center;
`;

const LabDirAvatar = () => {
  return (
    <LabAvatarContent>
      <LabTitle>LabDirector</LabTitle>
      <ProfImage src={Professor_img}></ProfImage>
    </LabAvatarContent>
  );
};

export default LabDirAvatar;
