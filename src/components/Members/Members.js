import React from "react";
import MembersCards from "./MembersCards";
import styled from "styled-components";
const MembersContain = styled.div`
  // height:100vh;

  background-color: #f5f7f8;
`;

const Members = () => {
  return (
    <>
      <MembersContain>
        <h1>This is members page.</h1>
        <MembersCards />
      </MembersContain>
    </>
  );
};

export default Members;
