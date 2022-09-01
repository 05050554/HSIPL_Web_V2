import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import { Image } from "antd";
import "antd/dist/antd.min.css";



const SliderHon = styled(Slider)`
  width: 85%;
  margin: auto;

  padding-top: 3%;
  .slick-prev:before {
    font-size: 3rem;
    color: black;
  }

  .slick-next:before {
    color: white;
    font-size: 3rem;
    color: black;
    margin:-1rem;
    @media (max-width: 550px){
      display:none;
    }
  }
  .slick-prev:before {
    
    @media (max-width: 550px){
      display:none;
    }
  }
  
`;

const HonorCards = () => {
  const [arrayData, setArrayData] = useState([]);
  const settings = {
    dots: false,
    infinite: false,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1650,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const IP = "http://140.125.45.160:6969/";
  const awards_url = "http://140.125.45.160:6969/api/lab/awards";

  useEffect(() => {
    const awards_api = async () => {
      try {
        let { data } = await axios.get(awards_url);
        setArrayData(data.data);
      } catch (e) {}
    };
    awards_api();
  }, []);
  return (
    <>
      <SliderHon {...settings}>
        {arrayData.map((item, index) => (
          <Grid key={item.id} sx={{ pl: 7.5 }}>
            <Card
              sx={{ width: 300, height: 700 }}
              style={{ backgroundColor: "#e0eeea" }}
            >
              <CardContent>
                <Typography color="text.secondary" variant="h5" gutterBottom style={{textAlign:"center"}}>
                  {item.date}
                </Typography>

                <Image
                  width="200"
                  src={IP + item.img}
                  alt={item.img}
                  key={item.id}
                />
                <Box sx={{ pb: 5 }}>
                  <Typography
                    sx={{ fontSize: 20, pt: 5 }}
                    color="text.secondary"
                    style={{ fontWeight: 600 }}
                  >
                    {item.content}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </SliderHon>
    </>
  );
};

export default HonorCards;
