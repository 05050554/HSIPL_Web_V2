import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/LOGO_1.png";
import About_Carousel from "./About_Carousel";

const AboutContain = styled.div`
  float: right;
  // z-index: 3;
  color: white;
  text-align: center;
  padding-bottom: 7%;
  font-family: "Oswald", sans-serif;
  font-size: 4rem;
  letter-spacing: 0.2rem;
  transform: rotateZ(90deg);
  white-space: nowrap;
`;

const VideoContent = styled.div`
  padding-top: 3rem;
  background-image: url(https://template101386.motopreview.com/mt-demo/101300/101386/mt-content/uploads/2020/05/mt-2019-bg-main.jpg);
`;

const FooterContent = `
.text-center{
  background-color:#2d3a4b;
  font-size: 1.7rem;
  color:rgb(241, 215, 68);
}

`;

const VedioDescribe = styled.div`
  font-size: 1.5rem;
  line-height: 3rem;
  text-align: justify;
  text-justify: inter-ideograph;
  margin: 0% 1%;
  align-self: center;
  padding: 10px 100px 50px 100px;
  color: white;
`;

const Text = {
  Footer:
    "希望找指導教授之學生請注意: Email請註明正取或備取名次，並附上個人基本資料履歷(包含熟悉之語言、曾做過之專題題目等)以及成績單，謝謝。",
  VedioContent:
    "The Hyperspectral Signal and Image Processing Laboratory (HSIPL), founded in Sept. 2014, is under the direction of Dr. Shih-Yu Chen. HSIPL is dedicated to design and develop algorithms for multi or hyperspectral, medical and satellite images, specifically for image classification, endmember finding and target detection. In particular, we have wide interests in various research topics for multi or hyperspectral applications.",
};

const About_HSIPL = () => {
  return (
    <>
      <About_Carousel />
      <AboutContain id="About_HSIPL">About HSIPL</AboutContain>
      <VideoContent>
        <iframe
          width="80%"
          height="700"
          src="https://www.youtube.com/embed/Lh_4Z_jrwvk"
          title="IRIS - Coffee Bean Machine."
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <VedioDescribe>{Text.VedioContent}</VedioDescribe>
      </VideoContent>

      <div class="text-center p-3">
        <style>{FooterContent}</style>
        {Text.Footer}
      </div>
    </>
  );
};

export default About_HSIPL;
