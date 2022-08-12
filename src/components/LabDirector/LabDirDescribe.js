import React from "react";
import styled from "styled-components";
import Mail_img from "../../img/Professor/Mail_img.png";
import Call_img from "../../img/Professor/Call_img1.png";

const DescribeContent = styled.div`
  width: 80%;
  padding-top: 10%;
  @media (max-width: 900px) {
    display: grid;
  }
`;

const DescribeSubTitle = styled.h2`
  text-align: left;
  @media (max-width: 900px) {
    width: 100%;
        display: grid;
        justify-items: center;
        //align-self: left;
        margin: 1% 0% 1% 0%;
        border-bottom: 0.1rem solid gray;
  }
`;

const DescribeH3Title = styled.h3`
  text-align: left;
`;

const DescribeImg = styled.img`
  height: auto;
  align-self: center;
  margin-right: 5%;
`;

const DescribeMore = styled.div`
  width: fit-content;
  text-decoration: none;
  white-space: nowrap;
  font-family: Oswald;
  border-radius: 10% /25%;
  margin-left: 10rem;
  align-self: center;
  padding: 1% 2%;
  letter-spacing: 0.1rem;
  color: black;
  border: rgb(151, 151, 148) solid 1px;
  background-color: #ecf2f5;
  transition: 0.5s;
`;

const ContactContent = styled.div`
  display: inline-flex;
  margin-top: 2%;
  width: 120%;
`;

const ContactSpan = styled.span`
  align-self: center;
  display: inline-flex;
  justify-content: start;
  font-size: 1.5rem;
  line-height: 2.2rem;
  text-align: left;
`;

const DescribeContact = styled.div`
  display: grid;
  flex: 3;
  align-items: center;
  justify-items: first baseline;
`;

const ResumeCon1 = styled.div`
  padding-top: 5%;
  padding-bottom: 3%;
  text-align: left;
`;

const ResumeCon2 = styled.div`
  padding-bottom: 5%;
  text-align: left;
`;

const ResumeSpan = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;

const LabDirDescribe = () => {
  return (
    <DescribeContent>
      <DescribeSubTitle>
        Associate Professor Chen, Shih-Yu 陳士煜
      </DescribeSubTitle>
      <DescribeH3Title>
        Department of Computer Science and Information Engineering National
        Yunlin University of Science and Technology
      </DescribeH3Title>
      <DescribeContact>
        <ContactContent>
          <DescribeImg src={Mail_img} alt="Mail_img"></DescribeImg>
          <ContactSpan>sychen@yuntech.edu.tw</ContactSpan>
        </ContactContent>

        <ContactContent>
          <DescribeImg src={Call_img} />
          <ContactSpan>
            (work) +886-5-5342601 ext 4514 <br /> (lab) +886-5-5342601 ext 4598
            <DescribeMore>
              <span>More Info. → </span>
            </DescribeMore>
          </ContactSpan>
        </ContactContent>
      </DescribeContact>
      <ResumeCon1>
        <ResumeSpan>
          陳士煜老師具備高光譜影像、影像辨識、人工智慧等研究與業界實務經驗，指導學生參加國內外競賽獲獎數次，並曾多次榮獲「國際發明展金牌」、「科技部優秀年輕學者研究計畫」、「科技部大專校院特殊優秀人才獎勵」、「中華民國電腦學會傑出青年學者獎」、「雲林科技大學研發績優新人獎」與「嶺東中學創校50週年傑出校友獎」等。
        </ResumeSpan>
      </ResumeCon1>
      <ResumeCon2>
        <ResumeSpan>
          研究成果在高光譜影像辨識技術發展上成果豐碩，將此技術運用於智慧農業與智慧製造方面，發表多篇SCI論文。尤其在高光譜影像之自動化咖啡豆瑕疵檢測系統榮獲多項國內外大獎與榮譽。另外過去四年在承接科技部專題計畫與產學合作案績效卓越，科技部計畫586萬。產學合作計畫706萬，合計擔任主持人之計畫金額超過1293萬。
        </ResumeSpan>
      </ResumeCon2>
    </DescribeContent>
  );
};

export default LabDirDescribe;
