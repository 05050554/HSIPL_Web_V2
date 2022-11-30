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
import { AddNewsDialog, EditNewsDialog, DeleteNewsDialog } from "./NewsDialog";
const CardSty = `
  .gird{
    
    margin:auto;
    justify-content: center;
  
  }
`;

const Content = styled.div``;

const News_Cards = () => {
  const [arrayData, setArrayData] = useState([]);

  const IP = "http://140:125:45:164:6969/";
  const news_url = "http://140:125:45:164:6969/api/lab/news";

  useEffect(() => {
    const news_api = async () => {
      try {
        let { data } = await axios.get(news_url);
        setArrayData(data.data);
      } catch (e) {}
    };
    news_api();
  }, []);

  return (
    <Content>
      <Grid className="gird" container spacing={5} sx={{ px: 10 }}>
        <style>{CardSty}</style>
        {arrayData.map((item, index) => (
          <Grid key={item.id}>
            <Card
              sx={{ width: 300, height: 650 }}
              style={{ backgroundColor: "silver" }}
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
      </Grid>
    </Content>
  );
};

export default News_Cards;

export function NewsCardsEdit() {
  const [arrayData, setArrayData] = useState([]);
  const [newOpen, setNewOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState("");
  const [newInfo, setNewInfo] = useState([]);

  const [image, setImage] = useState(null);

  const IP = "http://140:125:45:164:6969/";
  const url = "http://140:125:45:164:6969/api/lab/news";
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    },
  };

  useEffect(() => {
    const news_api = async () => {
      try {
        let { data } = await axios.get(url);
        setArrayData(data.data);
      } catch (e) {}
    };
    news_api();
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
      <Content>
        <Grid className="gird" container spacing={5} sx={{ px: 10 }}>
          <style>{CardSty}</style>
          {arrayData.map((item, index) => (
            <Grid key={item.id}>
              <Card
                sx={{ width: 300, height: 650 }}
                style={{ backgroundColor: "silver" }}
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
              <AddNewsDialog
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
              <EditNewsDialog
                actionOpen={editOpen}
                actionClose={handleEditClose}
                titleName="修改資訊"
                actionInfoChange={handleNewInfo}
                actionSubmit={handleEditSubmit}
                actionImg={onImageChange}
                number={item.id}
                image={image}
                IP={IP}
                currentImg={currentValue.img}
                currentDate={currentValue.date}
                currentContent={currentValue.content}
        
              />
              <DeleteBtn action={() => handleDeleteClickOpen(item)} />
              {/*Delete dialog*/}
              <DeleteNewsDialog
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
      </Content>
    </>
  );
}
