import React from "react";
import GrantSupportTable from "./GrantSupportTable";
import styled from "styled-components";

const SupportContain = styled.div`
  padding-top: 5%;
`;
const SupportTitleCon = styled.div`
  font-family: Signika, sans-serif;
  font-size: 3rem;
  text-align: left;
  margin-left: 5%;
`;
const SupportTitle = styled.h1``;

const GrantSupport = () => {
  return (
    <SupportContain>
      <SupportTitleCon>
        <SupportTitle>Grant Support and Projects</SupportTitle>
      </SupportTitleCon>
      <GrantSupportTable/>
    </SupportContain>
  );
};

export default GrantSupport;
