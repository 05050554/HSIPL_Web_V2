import React from "react";
import styled from "styled-components";
import Professor_img from "../../img/Professor/Professor_img.jpg";
const LabTitle = styled.h1`
    padding-bottom: 5%;
`;
const LabAvatarContent = styled.div`
  display: grid;
  grid-template-rows: 1fr 5fr;
  font-family: Oswald;
  letter-spacing: 0.2rem;
  font-size: 3rem;
  justify-items: center;
  padding: 20% 0% 20% 10%;
  text-align: center;
  @media (max-width: 900px) {
    display: grid;
  }
`;

const ProfImage = styled.img`
  width: 60%;

  margin-bottom: 5%;

  margin-left: 0;
  border-radius: 25%;
  border: solid white 0.5rem;

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
