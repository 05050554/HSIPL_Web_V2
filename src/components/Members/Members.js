import React from "react";
import MembersCards from "./MembersCards";
import styled from "styled-components";

const MembersContain = styled.div`
  background-color: #f5f7f8;
  padding-bottom: 5rem;
`;

const Title = styled.h1`
  // font-family: "Oswald", sans-serif;
  // font-size: 3rem;
  text-align: left;
  margin: 0% 5%;
`;

const SubTitle = styled.h2`
  text-align: left;
  margin: 0% 7%;
  color: black;
  border-bottom: solid 2px rgb(0, 47, 122);
  margin-bottom: 0;
  padding: 2% 0% 0% 0%;
`;

const Members = () => {
  return (
    <>
      <MembersContain>
        <Title>Current Master Students</Title>
        <SubTitle id="Senior">Senior Students</SubTitle>
        <MembersCards tag="senior" />
        <SubTitle id="Junior">Junior Students</SubTitle>
        <MembersCards tag="junior" />
        <Title>Alumnus</Title>
        <SubTitle id="Alumnus">M.S. Graduates</SubTitle>
        <MembersCards tag="alumnus" />
      </MembersContain>
    </>
  );
};

export default Members;
