import React from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
  padding: 1.5rem 0%;
  background-image: url(https://template101386.motopreview.com/mt-demo/101300/101386/mt-content/uploads/2020/05/mt-2019-bg-main.jpg);
  overflow: hidden;
  color: white;
`;

const FooterContain = styled.div`
  padding: 0% 3rem;
  display: flex;
  justify-content: center;
`;
const SpanContain = styled.div`
  padding: 0% 3rem;
  display: flex;

  flex-direction: column;
  text-align: left;
`;

const FooterSpan = styled.span`
  font-size: 15px;
`;

const Footer = () => {
  return (
    <FooterDiv>
      <FooterContain>
        <SpanContain>
          <FooterSpan>信箱: sychen@yuntech.edu.tw</FooterSpan>
          <FooterSpan>
            電話: (work) +886-5-5342601 ext 4514 / (lab) +886-5-5342601 ext 4598
          </FooterSpan>
          <FooterSpan>地址: 國立雲林科技大學 工程五館 EB206</FooterSpan>
          <FooterSpan>
          <i class="fa fa-copyright" aria-hidden="true"></i>本網站著作權屬於 國立雲林科技大學
            資訊工程學系 高光譜實驗室
          </FooterSpan>
          <FooterSpan>Made By: Xue-Wei Zou & Mei-Yun Wang</FooterSpan>
        </SpanContain>
      </FooterContain>
    </FooterDiv>
  );
};

export default Footer;
