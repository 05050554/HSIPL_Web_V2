import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EmailIcon from "@mui/icons-material/Email";

const SliderMem = styled(Slider)`
  width: 90%;
  margin: auto;
  margin-right: 5rem;
  padding-top: 3%;
  .slick-prev:before {
    font-size: 3rem;
    color: black;
    margin: -1rem;
    @media (max-width: 550px){
      display:none;
    }
  }

  .slick-next:before {
    color: white;
    font-size: 3rem;
    text-justify: auto;
    color: black;
    margin:-1rem;
    @media (max-width: 550px){
      display:none;
    }
  }
`;

const MembersCards = (props) => {
  const [arrayData, setArrayData] = useState([]);

  const settings = {
    dots: false,
    infinite: false,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 670,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const IP = "http://140.125.45.160:6969/";
  const members_url = "http://140.125.45.160:6969/api/lab/members";

  useEffect(() => {
    const members_api = async () => {
      try {
        let { data } = await axios.get(members_url);
        setArrayData(data.data);
      } catch (e) {}
    };
    members_api();
  }, []);
  return (
    <>
      <SliderMem {...settings}>
        {arrayData
          .filter((identity) => identity.tag === props.tag)
          .map((filterMembers, index) => (
            <Card sx={{ maxWidth: 300 }} key={index}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="400"
                  image={IP + filterMembers.img}
                  alt={filterMembers.img}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {filterMembers.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ pt: 2 }}
                  >
                    {filterMembers.researchDirection}
                  </Typography>
                  {props.tag === "alumnus" ? (
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ pt: 2 }}
                    >
                      論文題目: {filterMembers.paperTopic}
                    </Typography>
                  ) : null}
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ pt: 2 }}
                  >
                    <EmailIcon color="primary" />
                    {filterMembers.mail}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
      </SliderMem>
    </>
  );
};

export default MembersCards;
