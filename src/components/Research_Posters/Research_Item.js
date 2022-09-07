import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Image } from "antd";
import { AddBtn, EditBtn, DeleteBtn } from "../ToolBox/Button";
import {
  AddPosterDialog,
  EditPosterDialog,
  DeletePosterDialog,
} from "./Research_Dialog";

const Posters = styled.div`
  display: flex;
  justify-content: center;
  padding: 2% 0%;
  flex-wrap: wrap;
  @media (max-width: 1000px) {
    padding-top: 5%;
    width: 100%;
    display: flex;
    padding-left: 3%;
    justify-content: center;
  }
`;

const Item = styled.div`
  padding: 2%;
  display: grid;
  justify-content: center;
  width: 15vw;
  flex-wrap: wrap;
  width: 15%;
  @media (max-width: 1000px) {
    width: 30%;
  }
  @media (max-width: 600px) {
    width: 40%;
  }
  @media (max-width: 350px) {
    width: 60%;
  }
`;

const ItemIntro = styled.h3`
  padding-top: 5%;
  align-self: center;
  justify-content: center;
  color: rgb(221, 220, 220);
  font-size: 1em;
`;

const ItemIntro2 = styled.div`
  padding-top: 5%;
  align-self: center;
  justify-content: center;
  color:black;
  font-size: 20px;
`;
const BTNDiv = styled.div``;

const Research_Item = () => {
  const [arrayData, setArrayData] = useState([]);

  const IP = "http://140.125.45.160:6969/";
  const news_url = "http://140.125.45.160:6969/api/lab/posters";

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
    <Posters>
      {arrayData.map((item, index) => (
        <Item key={index}>
          <Image
            style={{ width: "100%", paddingBottom: "10%" }}
            src={IP + item.img}
            alt={item.img}
          />
          <ItemIntro>{item.title}</ItemIntro>
        </Item>
      ))}
    </Posters>
  );
};

export default Research_Item;

export function ResearchItemEdit() {
  const [arrayData, setArrayData] = useState([]);
  const [newOpen, setNewOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState("");
  const [newInfo, setNewInfo] = useState([]);
  const [image, setImage] = useState(null);

  const IP = "http://140.125.45.160:6969/";
  const url = "http://140.125.45.160:6969/api/lab/posters";
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
   
        <Posters>
          {arrayData.map((item, index) => (
            <>
              <>
                <Item key={index}>
                  <Image
                    style={{ width: "90%", paddingBottom: "10%" }}
                    src={IP + item.img}
                    alt={item.img}
                  />
                  <ItemIntro2>{item.title}</ItemIntro2>
                  <BTNDiv>
                <EditBtn action={() => handleEditClickOpen(item)} />
                <DeleteBtn action={() => handleDeleteClickOpen(item)} />
              </BTNDiv>
                </Item>
                {/*New Dialog*/}
                <AddPosterDialog
                  actionOpen={newOpen}
                  actionClose={handleNewClose}
                  titleName="新增資訊"
                  actionSubmit={handleNewSubmit}
                  actionInfoChange={handleNewInfo}
                  actionImg={onImageChange}
                  image={image}
                  title={newInfo.title}
                />

                {/*Edit dialog*/}
                <EditPosterDialog
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
                  number={item.id}
                />

                {/*Delete dialog*/}
                <DeletePosterDialog
                  actionOpen={deleteOpen}
                  actionClose={handleDeleteClose}
                  titleName="刪除資訊"
                  actionSubmit={handleDeleteSubmit}
                  actionImg={onImageChange}
                  image={image}
                  IP={IP}
                  currentImg={currentValue.img}
                  currentTitle={currentValue.title}
                  currentID={currentValue.id}
                  number={item.id}
                />

              </>
              
            </>
          ))}
        </Posters>
 
    </>
  );
}
