import React from "react";
import styled from "styled-components";
import AboutCarousel from "./AboutCarousel";

const AboutContain = styled.div`
  float: right;
  color: white;
  text-align: center;
  padding-bottom: 7%;
  font-family: "Oswald", sans-serif;
  font-size: 4rem;
  letter-spacing: 0.2rem;
  transform: rotateZ(90deg);
  white-space: nowrap;
  @media (max-width: 1400px) {
    transform: rotateZ(0deg);
    text-align: center;
    padding-top: 5%;
    padding-bottom: 3%;
    width: 100%;
  }
`;

const VideoContent = styled.div`
  padding-top: 3rem;
  padding-left: 10rem;
  // margin-left:3rem;
  width: 100%;
  margin: auto;
  background-image: url(https://template101386.motopreview.com/mt-demo/101300/101386/mt-content/uploads/2020/05/mt-2019-bg-main.jpg);
`;

const VideoContent2 = styled.div`
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
      <AboutCarousel />
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
      </VideoContent>
      <VideoContent2>
        <VedioDescribe>{Text.VedioContent}</VedioDescribe>
      </VideoContent2>

      <div class="text-center p-3">
        <style>{FooterContent}</style>
        {Text.Footer}
      </div>
    </>
  );
};

export default About_HSIPL;
