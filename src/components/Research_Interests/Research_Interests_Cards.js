import React, { useEffect, useState } from "react";
import axios from "axios";
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
  AddInterestsDialog,
  EditInterestsDialog,
  DeleteInterestsDialog,
} from "./Research_Interests_Dialog";

const CardSty = `
  .gird{
    margin:auto;
    justify-content: center;
    padding-right:0px;
    padding-left:0px;
    
  }
`;

const CardImg = `
  .Image{
 Padding-top:3%;
  }
`;

const ResearchContent = styled.div`
  padding-bottom: 3%;

  @media (max-width: 550px) {
    padding-right: 0px;
    padding-left: 0px;
  }
`;

const Research_Interests_Cards = () => {
  const [arrayData, setArrayData] = useState([]);

  const IP = "http://140.125.45.160:6969/";
  const research_url = "http://140.125.45.160:6969/api/lab/research";

  useEffect(() => {
    const research_api = async () => {
      try {
        let { data } = await axios.get(research_url);
        setArrayData(data.data);
        console.log(data.data);
      } catch (e) {}
    };
    research_api();
  }, []);

  return (
    <ResearchContent>
      <Grid className="gird" container spacing={5} sx={{ px: 10 }}>
        <style>{CardSty}</style>
        {arrayData.map((item, index) => (
          <Grid key={item.id}>
            <Card
              sx={{ width: 300, height: 700 }}
              style={{ backgroundColor: "rgb(156, 142, 136)" }}
            >
              <CardContent>
                <Typography
                  color="text.secondary"
                  variant="h5"
                  gutterBottom
                  style={{ fontWeight: 600, textAlign: "center" }}
                >
                  {item.title}
                </Typography>

                {item.img.substr(-3) === "mp4" ? (
                  <iframe
                    src={IP + item.img}
                    frameborder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    width="85%"
                  ></iframe>
                ) : (
                  <Image
                    width="200"
                    src={IP + item.img}
                    alt={item.img}
                    key={item.id}
                    className="Image"
                  />
                )}

                <style>{CardImg}</style>
                <Box sx={{ pb: 5 }}>
                  <Typography
                    sx={{ fontSize: 20, pt: 5 }}
                    color="text.secondary"
                    style={{ fontWeight: 500 }}
                  >
                    {item.content}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </ResearchContent>
  );
};

export default Research_Interests_Cards;

export function ResearchInterestsEdit() {
  const [arrayData, setArrayData] = useState([]);
  const [newOpen, setNewOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState("");
  const [newInfo, setNewInfo] = useState([]);

  const [image, setImage] = useState(null);
  const IP = "http://140.125.45.160:6969/";
  const url = "http://140.125.45.160:6969/api/lab/research";
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    },
  };
  useEffect(() => {
    const research_api = async () => {
      try {
        let { data } = await axios.get(url);
        setArrayData(data.data);
        console.log(data.data);
      } catch (e) {}
    };
    research_api();
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

  const handleNewSubmit = async () => {
    const formData = new FormData();
    formData.append("title", newInfo.title);
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
      title: item.title,
      img: item.img,
      content: item.content,
    });
  };
  const handleEditClose = () => {
    setEditOpen(false);
  };

  const handleEditSubmit = async () => {
    const formData = new FormData();

    if (newInfo.title) {
      formData.append("title", newInfo.title);
    } else {
      formData.append("title", currentValue.title);
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
    setCurrentValue({
      id: item.id,
      title: item.title,
      img: item.img,
      content: item.content,
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
      <ResearchContent>
        <Grid className="gird" container spacing={5} sx={{ px: 10 }}>
          <style>{CardSty}</style>
          {arrayData.map((item, index) => (
            <Grid key={item.id}>
              <Card
                sx={{ width: 300, height: 700 }}
                style={{ backgroundColor: "rgb(156, 142, 136)" }}
              >
                <CardContent>
                  <Typography
                    color="text.secondary"
                    variant="h5"
                    gutterBottom
                    style={{ fontWeight: 600, textAlign: "center" }}
                  >
                    {item.title}
                  </Typography>

                  {item.img.substr(-3) === "mp4" ? (
                    <iframe
                      src={IP + item.img}
                      frameborder="0"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                      width="85%"
                    ></iframe>
                  ) : (
                    <Image
                      width="200"
                      src={IP + item.img}
                      alt={item.img}
                      key={item.id}
                      className="Image"
                    />
                  )}

                  <style>{CardImg}</style>
                  <Box sx={{ pb: 5 }}>
                    <Typography
                      sx={{ fontSize: 10, pt: 5 }}
                      color="text.secondary"
                      style={{ fontWeight: 500 }}
                    >
                      {item.content}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
              {/*New Dialog*/}
              <AddInterestsDialog
                actionOpen={newOpen}
                actionClose={handleNewClose}
                titleName="新增資訊"
                actionSubmit={handleNewSubmit}
                actionInfoChange={handleNewInfo}
                actionImg={onImageChange}
                image={image}
                title={newInfo.title}
                content={newInfo.content}
              />
              <EditBtn action={() => handleEditClickOpen(item)} />
              {/*Edit dialog*/}
              <EditInterestsDialog
                actionOpen={editOpen}
                actionClose={handleEditClose}
                titleName="修改資訊"
                actionInfoChange={handleNewInfo}
                actionSubmit={handleEditSubmit}
                actionImg={onImageChange}
                image={image}
                IP={IP}
                currentImg={currentValue.img}
                currentTitle={currentValue.title}
                currentContent={currentValue.content}
                number={item.id}
              />
              <DeleteBtn action={() => handleDeleteClickOpen(item)} />
               {/*Delete dialog*/}
               <DeleteInterestsDialog
                actionOpen={deleteOpen}
                actionClose={handleDeleteClose}
                titleName="刪除資訊"
                actionSubmit={handleDeleteSubmit}
                actionImg={onImageChange}
                image={image}
                IP={IP}
                currentImg={currentValue.img}
                currentTitle={currentValue.title}
                currentContent={currentValue.content}
                currentID={currentValue.id}
                number={item.id}
              />
            </Grid>
          ))}
        </Grid>
      </ResearchContent>
    </>
  );
}
