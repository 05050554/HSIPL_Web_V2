import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const CarouselContent = styled.div`
  background-color: #2d3a4b;
  padding-top: 10%;
  margin-top: -5%;
`;

const SliderCon = styled(Slider)`
  width: 90%;
  margin: auto;
  margin-right: 5rem;
  .slick-prev:before {
    font-size: 3rem;

    margin: -1rem;
  }

  .slick-next:before {
    color: white;
    font-size: 3rem;
    text-justify: auto;
  }
`;
const PicContent = styled.div``;

const Img = styled.img`
  margin: auto;
  width: 60%;
`;

const About_Carousel = () => {
  const [arrayData, setArrayData] = useState([]);

  const IP = "http://140.125.45.160:6969/";
  const event_url = "http://140.125.45.160:6969/api/lab/eventImg";

  useEffect(() => {
    const event_api = async () => {
      try {
        let { data } = await axios.get(event_url);
        setArrayData(data.data);
      } catch (e) {}
    };
    event_api();
  }, []);

  const settings_slider = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
  };
  return (
    <CarouselContent>
      <SliderCon autoplay {...settings_slider}>
        {arrayData.map((item,index) => (
          <PicContent key={index}>
            <Img src={IP + item.img} alt={index} key={item.id}/>
          </PicContent>
        ))}
      </SliderCon>
    </CarouselContent>
  );
};

export default About_Carousel;
