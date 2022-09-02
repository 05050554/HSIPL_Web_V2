import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import Styled from "styled-components";
import { styled } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AddBtn, EditBtn, DeleteBtn } from "../ToolBox/Button";
import {
  AddAboutCarouselDialog,
  EditAboutCarouselDialog,
  DeleteAboutCarouselDialog,
} from "./AboutDialog";

const CarouselContent = Styled.div`
  background-color: #2d3a4b;
  padding-top: 10%;
  margin-top: -5%;
`;

const SliderCon = Styled(Slider)`
  width: 80%;
  margin: auto;

  .slick-prev:before {
    font-size: 3rem;
    margin: -1rem;
    @media (max-width: 550px) {
      display: none;
    }
  }

  .slick-next:before {
    color: white;
    font-size: 3rem;
    margin: -1rem;
    text-justify: auto;
    @media (max-width: 550px) {
      display: none;
    }
  }
`;

const PicContent = Styled.div``;

const Img = Styled.img`
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
        setArrayData(data.data.reverse());
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
        {arrayData.map((item, index) => (
          <PicContent key={index}>
            <Img src={IP + item.img} alt={index} key={item.id} />
          </PicContent>
        ))}
      </SliderCon>
    </CarouselContent>
  );
};

export default About_Carousel;

const CarouselContentEdit = Styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const PicContentEdit = Styled.div`
  width: 50%;
  padding: 2% 5% 5% 5%;
`;

const ImgEdit = Styled.img`
  width: 80%;
  justify-content: center;
`;

const SpanCon = Styled.div``;

const ImgSpan = Styled.span`
  font-size: 30px;
`;

export const UploadImgButton = styled("input")({
  "::-webkit-file-upload-button": {
    margin: "1rem 1rem 0 0",
    border: "0px",
    lineHeight: "1.75",
    padding: "6px 16px",
    borderRadius: "4px",
    color: "white",
    backgroundColor: "rgb(25, 118, 210)",
  },
});

export function AboutCarouselEdit() {
  const [arrayData, setArrayData] = useState([]);
  const IP = "http://140.125.45.160:6969/";
  const event_url = "http://140.125.45.160:6969/api/lab/eventImg";
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    },
  };

  useEffect(() => {
    const event_api = async () => {
      try {
        let { data } = await axios.get(event_url);
        setArrayData(data.data);
      } catch (e) {}
    };
    event_api();
  }, []);

  const [newOpen, setNewOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState("");
  const [newInfo, setNewInfo] = useState([]);

  const [image, setImage] = useState(null);

  const handleNewClickOpen = () => {
    setNewOpen(true);
  };
  const handleNewClose = () => {
    setNewOpen(false);
  };

  const handleNewSubmit = async (e) => {
    const formData = new FormData();
    formData.append("img", newInfo.image);

    try {
      await axios.post(event_url, formData, config);
    } catch (error) {
      console.log(error);
    }
  };

  const onImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
    setNewInfo((preData) => ({
      ...preData,
      image: e.target.files[0],
    }));
    console.log(newInfo);
  };

  const handleEditClickOpen = (item) => {
    setEditOpen(true);
    setCurrentValue({ id: item.id, img: item.img });
  };
  const handleEditClose = () => {
    setEditOpen(false);
  };

  const handleEditSubmit = async () => {
    const formData = new FormData();
    formData.append("img", newInfo.image);

    try {
      await axios.put(event_url + "/" + currentValue.id, formData, config);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteClickOpen = (item) => {
    setDeleteOpen(true);
    setCurrentValue({ id: item.id, img: item.img });
  };
  const handleDeleteClose = () => {
    setDeleteOpen(false);
  };

  const handleDeleteSubmit = async () => {
    try {
      await axios.delete(event_url + "/" + currentValue.id, config);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <AddBtn action={handleNewClickOpen} />
      <CarouselContentEdit>
        {arrayData.map((item, index) => (
          <>
            <PicContentEdit key={index}>
              <ImgEdit src={IP + item.img} alt={index} key={item.id} />
            </PicContentEdit>
            <SpanCon>
              <ImgSpan>ID: {item.id}</ImgSpan>
              <br />
              <ImgSpan>Image: {item.img}</ImgSpan>
              <br />

              <EditBtn action={() => handleEditClickOpen(item)} />
              <DeleteBtn action={() => handleDeleteClickOpen(item)} />
            </SpanCon>
            {/*New Dialog*/}
            <AddAboutCarouselDialog
              actionOpen={newOpen}
              actionClose={handleNewClose}
              titleName="新增資訊"
              actionSubmit={handleNewSubmit}
              actionImg={onImageChange}
              image={image}
            />
            {/*Edit dialog*/}
            <EditAboutCarouselDialog
              actionOpen={editOpen}
              actionClose={handleEditClose}
              titleName="修改資訊"
              actionSubmit={handleEditSubmit}
              actionImg={onImageChange}
              image={image}
              IP={IP}
              currentImg={currentValue.img}
              number={item.id}
            />
            {/*Delete dialog*/}
            <DeleteAboutCarouselDialog
              actionOpen={deleteOpen}
              actionClose={handleDeleteClose}
              titleName="刪除資訊"
              actionSubmit={handleDeleteSubmit}
              actionImg={onImageChange}
              image={image}
              IP={IP}
              currentImg={currentValue.img}
              currentID={currentValue.id}
              number={item.id}
            />
          </>
        ))}
      </CarouselContentEdit>
    </>
  );
}
