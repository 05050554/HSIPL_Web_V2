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
import { AddBtn, EditBtn, DeleteBtn } from "../ToolBox/Button";
import {
  AddHonorDialog,
  EditHonorDialog,
  DeleteHonorDialog,
} from "./HonorDialog";

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
    margin: -1rem;
    @media (max-width: 550px) {
      display: none;
    }
  }
  .slick-prev:before {
    @media (max-width: 550px) {
      display: none;
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

  const IP = "http://140:125:45:164:6969/";
  const awards_url = "http://140:125:45:164:6969/api/lab/awards";

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
                <Typography
                  color="text.secondary"
                  variant="h5"
                  gutterBottom
                  style={{ textAlign: "center" }}
                >
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

export function HonorCardsEdit() {
  const [arrayData, setArrayData] = useState([]);

  const [newOpen, setNewOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState("");
  const [newInfo, setNewInfo] = useState([]);
  const [image, setImage] = useState(null);

  const IP = "http://140:125:45:164:6969/";
  const url = "http://140:125:45:164:6969/api/lab/awards";
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    },
  };

  useEffect(() => {
    const awards_api = async () => {
      try {
        let { data } = await axios.get(url);
        setArrayData(data.data);
      } catch (e) {}
    };
    awards_api();
  }, []);

  const handleNewClickOpen = () => {
    setNewOpen(true);
  };
  const handleNewClose = () => {
    setNewOpen(false);
  };

  const handleNewInfo = (e) => {
    const { value, name } = e.target;
    setNewInfo((preData) => ({
      ...preData,
      [name]: value,
    }));
  };

  const handleNewSubmit = async () => {
    const formData = new FormData();
    formData.append("date", newInfo.date);
    formData.append("img", newInfo.image);
    formData.append("content", newInfo.content);
    try {
      await axios.post(url, formData, config);
      alert("新增成功");
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
  };

  const handleEditClickOpen = (item) => {
    setEditOpen(true);
    setCurrentValue({
      id: item.id,
      date: item.date,
      img: item.img,
      content: item.content,
    });
  };
  const handleEditClose = () => {
    setEditOpen(false);
  };

  const handleEditSubmit = async () => {

    const formData = new FormData();

    if (newInfo.date) {
      formData.append("date", newInfo.date);
    } else {
      formData.append("date", currentValue.date);
    }

    formData.append("img", newInfo.image);

    if (newInfo.content) {
      formData.append("content", newInfo.content);
    } else {
      formData.append("content", currentValue.content);
    }

    try {
      await axios.put(url + "/" + currentValue.id, formData, config);
      alert("編輯成功");
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
      await axios.delete(url + "/" + currentValue.id, config);
      alert("刪除成功");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <AddBtn action={handleNewClickOpen} />
      <Grid className="gird" container spacing={5} sx={{ px: 23 }}>
        {arrayData.map((item, index) => (
          <Grid key={item.id} sx={{ pl: 7.5 }}>
            <Card
              sx={{ width: 300, height: 700 }}
              style={{ backgroundColor: "#e0eeea" }}
            >
              <CardContent>
                <Typography
                  color="text.secondary"
                  variant="h5"
                  gutterBottom
                  style={{ textAlign: "center" }}
                >
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
            {/*New Dialog*/}
            <AddHonorDialog
              actionOpen={newOpen}
              actionClose={handleNewClose}
              titleName="新增資訊"
              actionSubmit={handleNewSubmit}
              actionInfoChange={handleNewInfo}
              actionImg={onImageChange}
              image={image}
              date={newInfo.date}
              content={newInfo.content}
            />
            <EditBtn action={() => handleEditClickOpen(item)} />
            {/*Edit dialog*/}
            <EditHonorDialog
              actionOpen={editOpen}
              actionClose={handleEditClose}
              titleName="修改資訊"
              actionInfoChange={handleNewInfo}
              actionSubmit={handleEditSubmit}
              actionImg={onImageChange}
              image={image}
              IP={IP}
              currentImg={currentValue.img}
              currentDate={currentValue.date}
              currentContent={currentValue.content}
              number={item.id}
            />
            <DeleteBtn action={() => handleDeleteClickOpen(item)} />
            {/*Delete dialog*/}
            <DeleteHonorDialog
              actionOpen={deleteOpen}
              actionClose={handleDeleteClose}
              titleName="刪除資訊"
              actionSubmit={handleDeleteSubmit}
              actionImg={onImageChange}
              image={image}
              IP={IP}
              currentImg={currentValue.img}
              currentDate={currentValue.date}
              currentContent={currentValue.content}
              currentID={currentValue.id}
              number={item.id}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
