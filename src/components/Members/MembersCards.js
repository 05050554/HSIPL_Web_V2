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
import Grid from "@mui/material/Unstable_Grid2";
import { AddBtn, EditBtn, DeleteBtn } from "../ToolBox/Button";
import {
  AddMembersDialog,
  EditMembersDialog,
  DeleteMembersDialog,
} from "./MembersDialog";

const SliderMem = styled(Slider)`
  width: 90%;
  margin: auto;
  margin-right: 5rem;
  padding-top: 3%;
  .slick-list {
    padding-left: 3rem;
    padding-right: 3rem;
  }
  .slick-prev:before {
    font-size: 3rem;
    color: black;
    margin: -1rem;
    @media (max-width: 550px) {
      display: none;
    }
  }

  .slick-next:before {
    color: white;
    font-size: 3rem;
    text-justify: auto;
    color: black;
    margin: -1rem;
    @media (max-width: 550px) {
      display: none;
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

  const IP = "http://140:125:45:164:6969/";
  const members_url = "http://140:125:45:164:6969/api/lab/members";

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
                <CardContent style={{ textAlign: "center" }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {filterMembers.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ pt: 2 }}
                  >
                    研究方向: {filterMembers.researchDirection}
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

export function MembersCardsEdit() {
  const [arrayData, setArrayData] = useState([]);
  const [newOpen, setNewOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState("");
  const [newInfo, setNewInfo] = useState([]);

  const [image, setImage] = useState(null);
  const IP = "http://140:125:45:164:6969/";
  const url = "http://140:125:45:164:6969/api/lab/members";
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    },
  };

  useEffect(() => {
    const members_api = async () => {
      try {
        let { data } = await axios.get(url);
        console.log("123")
        setArrayData(data.data);
      } catch (e) { console.log("456")}
    };
    members_api();
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
    console.log(newInfo);
  };

  const handleNewSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("tag", newInfo.tag);
    formData.append("name", newInfo.name);
    formData.append("researchDirection", newInfo.researchDirection);
    formData.append("mail", newInfo.mail);
    formData.append("img", newInfo.image);

    newInfo.tag === "alumnus" &&
      formData.append("paperTopic", newInfo.paperTopic);

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
      tag: item.tag,
      name: item.name,
      img: item.img,
      researchDirection: item.researchDirection,
      mail: item.mail,
      paperTopic: item.paperTopic,
    });
  };
  const handleEditClose = () => {
    setEditOpen(false);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    console.log(newInfo);
    console.log(currentValue);
    const formData = new FormData();

    if (newInfo.tag) {
      formData.append("tag", newInfo.tag);
    } else {
      formData.append("tag", currentValue.tag);
    }

    if (newInfo.name) {
      formData.append("name", newInfo.name);
    } else {
      formData.append("name", currentValue.name);
    }

    if (newInfo.researchDirection) {
      formData.append("researchDirection", newInfo.researchDirection);
    } else {
      formData.append("researchDirection", currentValue.researchDirection);
    }

    if (newInfo.mail) {
      formData.append("mail", newInfo.mail);
    } else {
      formData.append("mail", currentValue.mail);
    }

    formData.append("img", newInfo.image);

    if (newInfo.tag === "alumnus" || currentValue.tag === "alumnus") {
      formData.append("paperTopic", newInfo.paperTopic);
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
    setCurrentValue({
      id: item.id,
      tag: item.tag,
      name: item.name,
      img: item.img,
      researchDirection: item.researchDirection,
      mail: item.mail,
      paperTopic: item.paperTopic,
    });
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
      <Grid className="gird" container spacing={1} sx={{ px: 20 }}>
        {arrayData.map((item, index) => (
          <Grid key={item.id} sx={{ px: 5, py: 10 }}>
            <Card sx={{ maxWidth: 300 }} key={index}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="400"
                  image={IP + item.img}
                  alt={item.img}
                />
                <CardContent style={{ textAlign: "center" }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ pt: 2 }}
                  >
                    身分: {item.tag}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ pt: 2 }}
                  >
                    研究方向: {item.researchDirection}
                  </Typography>
                  {item.tag === "alumnus" ? (
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ pt: 2 }}
                    >
                      論文題目: {item.paperTopic}
                    </Typography>
                  ) : null}
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ pt: 2 }}
                  >
                    <EmailIcon color="primary" />
                    {item.mail}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            {/*New Dialog*/}
            <AddMembersDialog
              actionOpen={newOpen}
              actionClose={handleNewClose}
              titleName="新增資訊"
              actionSubmit={handleNewSubmit}
              actionInfoChange={handleNewInfo}
              actionImg={onImageChange}
              tag={newInfo.tag}
              image={image}
            />
            <EditBtn action={() => handleEditClickOpen(item)} />
            <EditMembersDialog
              actionOpen={editOpen}
              actionClose={handleEditClose}
              titleName="修改資訊"
              actionInfoChange={handleNewInfo}
              actionSubmit={handleEditSubmit}
              actionImg={onImageChange}
              image={image}
              IP={IP}
              number={item.id}
              tag={newInfo.tag}
              currentTag={currentValue.tag}
              currentImg={currentValue.img}
              currentName={currentValue.name}
              currentResearchDirection={currentValue.researchDirection}
              currentMail={currentValue.mail}
              currentPaperTopic={currentValue.paperTopic}
            />
            <DeleteBtn action={() => handleDeleteClickOpen(item)} />
            <DeleteMembersDialog
              actionOpen={deleteOpen}
              actionClose={handleDeleteClose}
              titleName="刪除資訊"
              actionSubmit={handleDeleteSubmit}
              actionImg={onImageChange}
              image={image}
              IP={IP}
              currentName={currentValue.name}
              currentResearchDirection={currentValue.researchDirection}
              currentMail={currentValue.mail}
              currentImg={currentValue.img}
              currentPaperTopic={currentValue.paperTopic}
              currentID={currentValue.id}
              number={item.id}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
