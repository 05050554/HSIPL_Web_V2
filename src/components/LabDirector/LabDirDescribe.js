import React from "react";
import styled from "styled-components";
import LabDirContact from "./LabDirContact";

const DescribeContent = styled.div`
  display: grid;
  flex: 3;
  align-items: center;
  margin: 2.5% 10% 2.5% 2.5%;
  justify-items: first baseline;
  @media (max-width: 900px) {
    margin: 5%;
    justify-items: center;
  }
`;

const DescribeSubTitle = styled.div`
  display: inline-flex;
  @media (max-width: 900px) {
    width: 100%;
    display: grid;
    justify-items: center;
    margin: 1% 0% 1% 0%;
    border-bottom: 0.1rem solid gray;
  }
`;
const DescribeSubTitleSpan = styled.span`
  text-align: left;
  font-family: Oswald;
  letter-spacing: 0.2rem;
  font-size: 2rem;
  align-items: center;
  margin-bottom: 2%;
  white-space: nowrap;
  margin-right: 5%;
  margin-top: 0%;
`;

const DescribeH3Title = styled.span`
  align-self: center;
  display: inline-flex;
  justify-content: start;
  font-size: 1.5rem;
  line-height: 2.2rem;
  text-align: left;
  @media (max-width: 900px) {
    text-align: center;
    margin: 2% 0% 2% 0%;
  }
`;

const ResumeCon = styled.div`
  padding-top: 5%;
  text-align: left;
`;

const ResumeP = styled.p`
  font-family: "Noto Sans TC", sans-serif;
  font-size: 1.2rem;
`;

const LabDirDescribe = () => {
  return (
    <DescribeContent>
      <DescribeSubTitle>
        <DescribeSubTitleSpan>Associate Professor</DescribeSubTitleSpan>
        <DescribeSubTitleSpan>Chen, Shih-Yu 陳士煜</DescribeSubTitleSpan>
      </DescribeSubTitle>
      <DescribeH3Title>
        Department of Computer Science and Information Engineering
      </DescribeH3Title>
      <DescribeH3Title>
        National Yunlin University of Science and Technology
      </DescribeH3Title>

      <LabDirContact />

      <ResumeCon>
        <ResumeP>
          陳士煜老師具備高光譜影像、影像辨識、人工智慧等研究與業界實務經驗，指導學生參加國內外競賽獲獎數次，並曾多次榮獲「國際發明展金牌」、「科技部優秀年輕學者研究計畫」、「科技部大專校院特殊優秀人才獎勵」、「中華民國電腦學會傑出青年學者獎」、「雲林科技大學研發績優新人獎」與「嶺東中學創校50週年傑出校友獎」等。
        </ResumeP>
        <ResumeP>
          研究成果在高光譜影像辨識技術發展上成果豐碩，將此技術運用於智慧農業與智慧製造方面，發表多篇SCI論文。尤其在高光譜影像之自動化咖啡豆瑕疵檢測系統榮獲多項國內外大獎與榮譽。另外過去四年在承接科技部專題計畫與產學合作案績效卓越，科技部計畫586萬。產學合作計畫706萬，合計擔任主持人之計畫金額超過1293萬。
        </ResumeP>
      </ResumeCon>
    </DescribeContent>
  );
};

export default LabDirDescribe;
