import React from "react";
import styled from "styled-components";
import Mail_img from "../../img/Professor/Mail_img.png";
import Call_img from "../../img/Professor/Call_img1.png";

const MailContact = styled.div`
  display: inline-flex;
  margin-top: 2%;
  @media (max-width: 900px) {
    width: 100%;
    display: grid;
    justify-items: center;
    border-top: 0.1rem solid gray;
    border-bottom: 0.1rem solid gray;
  }
`;

const MailImg = styled.img`
  width: 100%;
  height: auto;
  align-self: center;
  margin-right: 5%;
  @media (max-width: 900px) {
    width: 7%;
    justify-self: center;
    margin-top: 2.5%;
    margin-right: 0%;
  }
`;

const ContactSpan = styled.span`
  text-align: left;
  align-self: center;
  padding-left: 2%;
`;

const Phone = styled.div`
  width: 100%;
  display: inline-flex;
  flex-wrap: nowrap;
  @media (max-width: 900px) {
    width: 100%;
    display: grid;
    justify-items: center;
  }
`;

const ContactContent = styled.span`
  flex: 6;
  white-space: nowrap;
  text-align: left;
`;

const PhoneImg = styled.img`
  align-self: center;
  margin-right: 2%;
  @media (max-width: 900px) {
    width: 7%;
    justify-self: center;
    margin-top: 2.5%;
    margin-right: 0%;
  }
`;

const BtnMore = styled.a`
  flex: 1;
  width: fit-content;
  text-decoration: none;
  white-space: nowrap;
  font-family: Oswald;
  font-size: 1.5rem;
  border-radius: 10% /25%;
  text-align: left;
  align-self: center;
  padding: 1% 2%;
  letter-spacing: 0.1rem;
  color: black;
  border: rgb(151, 151, 148) solid 1px;
  background-color: #ecf2f5;
  transition: 0.5s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.384);
    background-position: right center;
    color: rgb(255, 255, 255);
  }
  @media (max-width: 900px) {
    text-decoration: none;
    font-family: Oswald;
    font-size: 1.2rem;
    border-radius: 10% / 30%;
    text-align: center;
    vertical-align: middle;
    padding: 1% 2%;
    margin: 5% 0%;
    border-style: none;

    background-color: rgba(25, 25, 25, 0.3);
    background-image: none;
  }
`;

export default function LabDirContact() {
  return (
    <>
      <MailContact>
        <MailImg src={Mail_img} alt="Mail_img"></MailImg>
        <ContactSpan>sychen@yuntech.edu.tw</ContactSpan>
      </MailContact>

      <Phone>
        <PhoneImg src={Call_img} />
        <ContactContent>
          (work) +886-5-5342601 ext 4514
          <br></br>(lab) +886-5-5342601 ext 4598
        </ContactContent>
        <BtnMore href="/ProfessorDetail" rel="noopener noreferrer">
          <span>More Info. → </span>
        </BtnMore>
      </Phone>
    </>
  );
}

export function LabDirContactDetail() {
  return (
    <>
      <MailContact>
        <MailImg src={Mail_img} alt="Mail_img"></MailImg>
        <ContactSpan>sychen@yuntech.edu.tw</ContactSpan>
      </MailContact>

      <Phone>
        <PhoneImg src={Call_img} />
        <ContactContent>
          (work) +886-5-5342601 ext 4514
          <br></br>(lab) +886-5-5342601 ext 4598
        </ContactContent>
        <BtnMore
          href="https://scholar.google.com/citations?user=0LxRRawAAAAJ&hl=zh-TW"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span>Google Scholar</span>
        </BtnMore>
      </Phone>
    </>
  );
}
