import React, { useEffect, useState } from "react";

import axios from "axios";

import styled from "styled-components";
import Tooltip from "@mui/material/Tooltip";
import { AddBtn, EditBtn, DeleteBtn } from "../ToolBox/Button";
import { AddEquipmentDialog,EditEquipmentDialog,DeleteEquipmentDialog } from "./EquipmentDialog";
const EqContain = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const BtnBox = styled.div`
  width: 50%;
`;

const EqContain3 = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const EqContain2 = styled.div`
  display: grid;
  width: 40%;
  justify-items: center;
`;

const ImgBox = styled.div`
  width: 30%;
  padding: 1%;
  &:hover {
    background-color: lightblue;
    border-radius: 10%;
  }
`;
const ImgBox2 = styled.div`
  width: 50%;
  padding: 1%;
  &:hover {
    background-color: lightblue;
    border-radius: 10%;
  }
`;

const Img = styled.img`
  width: 80%;
`;

const Img2 = styled.img`
  width: 100%;
`;

const EquipmentOW = () => {
  const [arrayData, setArrayData] = useState([]);
  const IP = "http://140.125.45.160:6969/";
  const url = "http://140.125.45.160:6969/api/lab/equipment";

  useEffect(() => {
    const api = async () => {
      try {
        let { data } = await axios.get(url);
        setArrayData(data.data);
        console.log(data.data);
      } catch (e) {}
    };
    api();
  }, []);
  return (
    <EqContain>
      {arrayData.map((item, index) => (
        <Tooltip title={item.title}>
          <ImgBox>
            <a href={"#" + item.tag}>
              <Img src={IP + item.img}></Img>
            </a>
          </ImgBox>
        </Tooltip>
      ))}
    </EqContain>
  );
};

export default EquipmentOW;

export function EquipmentOWEdit() {
  const [arrayData, setArrayData] = useState([]);
  const [newOpen, setNewOpen] = useState(false);
  const [newInfo, setNewInfo] = useState([]);
  const [editOpen, setEditOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState("");
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [image, setImage] = useState(null);
  const IP = "http://140.125.45.160:6969/";
  const url = "http://140.125.45.160:6969/api/lab/equipment";
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    },
  };

  useEffect(() => {
    const api = async () => {
      try {
        let { data } = await axios.get(url);
        setArrayData(data.data);
        console.log(data.data);
      } catch (e) {}
    };
    api();
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

  const handleNewSubmit = async (e) => {
    const formData = new FormData();
    formData.append("tag", newInfo.tag);
    formData.append("img", newInfo.image);
    formData.append("title", newInfo.title);
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
      img: item.img,
      title: item.title,
    });
  };
  const handleEditClose = () => {
    setEditOpen(false);
  };

  const handleEditSubmit = async () => {
    const formData = new FormData();

    if (newInfo.tag) {
      formData.append("tag", newInfo.tag);
    } else {
      formData.append("tag", currentValue.tag);
    }

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
      tag: item.tag,
      img: item.img,
      title: item.title,
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
      {" "}
      <AddBtn action={handleNewClickOpen} />
      <EqContain3>
        {arrayData.map((item, index) => (
          <EqContain2>
            <Tooltip title={item.title}>
              <ImgBox2>
                <a href={"#" + item.tag}>
                  <Img2 src={IP + item.img}></Img2>
                </a>
              </ImgBox2>
            </Tooltip>
            <BtnBox>
              <EditBtn action={() => handleEditClickOpen(item)} />
              <DeleteBtn action={() => handleDeleteClickOpen(item)} />
            </BtnBox>
            {/*New Dialog*/}
            <AddEquipmentDialog
              actionOpen={newOpen}
              actionClose={handleNewClose}
              titleName="新增資訊"
              tag={newInfo.tag}
              title={newInfo.title}
              actionInfoChange={handleNewInfo}
              actionSubmit={handleNewSubmit}
              actionImg={onImageChange}
              image={image}
            />
            {/*Edit dialog*/}
            <EditEquipmentDialog
              actionOpen={editOpen}
              actionClose={handleEditClose}
              titleName="修改資訊"
              actionSubmit={handleEditSubmit}
              actionInfoChange={handleNewInfo}
              actionImg={onImageChange}
              image={image}
              IP={IP}
              currentImg={currentValue.img}
              currentTag={currentValue.tag}
              currentTitle={currentValue.title}
              number={item.id}
            />
            {/*Delete dialog*/}
            <DeleteEquipmentDialog
              actionOpen={deleteOpen}
              actionClose={handleDeleteClose}
              titleName="刪除資訊"
              actionSubmit={handleDeleteSubmit}
              actionImg={onImageChange}
              image={image}
              IP={IP}
              currentImg={currentValue.img}
              currentID={currentValue.id}
              currentTag={currentValue.tag}
              currentTitle={currentValue.title}
              number={item.id}
            />
          </EqContain2>
        ))}
      </EqContain3>
    </>
  );
}
