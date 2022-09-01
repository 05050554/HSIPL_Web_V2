import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import Styled from "styled-components";
import { styled } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {
  TextField,
  DialogTitle,
  Dialog,
  DialogActions,
  DialogContent,
  List,
  ListItem,
  Chip,
  ListItemText,
} from "@mui/material";

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

export function About_Carousel_Edit() {
  const [arrayData, setArrayData] = useState([]);
  var token = localStorage.getItem("token")
  
  const IP = "http://140.125.45.160:6969/";
  const event_url = "http://140.125.45.160:6969/api/lab/eventImg";
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${JSON.parse(token)}`
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

  const handleEdit = (item) => {
    console.log(item);
  };
  const [newOpen, setNewOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState("");
  const [newInfo, setNewInfo] = useState([]);
  const [editInfo, setEditInfo] = useState({
    id: "",
  });
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
      ["image"]: e.target.files[0],
    }));
    console.log(newInfo);
  };

  const handleEditClickOpen = (item) => {
    setEditOpen(true);
    setCurrentValue({ ["id"]: item.id, ["img"]: item.img });
  };
  const handleEditClose = () => {
    setEditOpen(false);
  };


  const handleDeleteClickOpen = (item) => {
    setDeleteOpen(true);
    setCurrentValue({ ["id"]: item.id, ["img"]: item.img });
  };
  const handleDeleteClose = () => {
    setDeleteOpen(false);
  };

  return (
    <>
      <Button variant="contained" color="success" onClick={handleNewClickOpen}>
        {" "}
        <AddCircleOutlineIcon />
        新增
      </Button>
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
              <Tooltip title="修改">
                <Button
                  variant="contained"
                  onClick={() => handleEditClickOpen(item)}
                >
                  <EditIcon style={{ fontSize: "30" }} />
                  Edit
                </Button>
              </Tooltip>{" "}
              <Tooltip title="刪除">
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => handleDeleteClickOpen(item)}
                >
                  <DeleteIcon style={{ fontSize: "30" }} />
                  Delete
                </Button>
              </Tooltip>
            </SpanCon>
            {/*New Dialog*/}
            <Dialog
              open={newOpen}
              onClose={handleNewClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
              onBackdropClick="false"
              maxWidth="xs"
            >
              <DialogTitle
                id="alert-dialog-title"
                style={{ textAlign: "center", cursor: "move" }}
              >
                {"新增資訊"}
              </DialogTitle>

              <form onSubmit={handleNewSubmit}>
                <DialogContent style={{ textAlign: "center" }}>
                  <UploadImgButton
                    accept="image/*"
                    id="contained-button-file"
                    multiple
                    type="file"
                    onChange={onImageChange}
                  />
                  <img width="200#" src={image} />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleNewClose}>取消</Button>
                  <Button type="submit">確認</Button>
                </DialogActions>
              </form>
            </Dialog>
            {/*Edit dialog*/}
            <Dialog
              open={editOpen}
              onClose={handleEditClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
              onBackdropClick="false"
              maxWidth="xs"
            >
              <DialogTitle
                id="alert-dialog-title"
                style={{ textAlign: "center", cursor: "move" }}
              >
                {"修改資訊"}
              </DialogTitle>

              <form>
                <DialogContent style={{ textAlign: "center" }}>
                  <Img src={IP + currentValue.img} alt={index} key={item.id} />
                  <UploadImgButton
                    accept="image/*"
                    id="contained-button-file"
                    multiple
                    type="file"
                    onChange={onImageChange}
                  />
                  <img width="200#" src={image} />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleEditClose}>取消</Button>
                  <Button type="submit">確認</Button>
                </DialogActions>
              </form>
            </Dialog>

            {/*Delete dialog*/}
            <Dialog
              open={deleteOpen}
              onClose={handleDeleteClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
              onBackdropClick="false"
              maxWidth="xs"
            >
              <DialogTitle
                id="alert-dialog-title"
                style={{ textAlign: "center", cursor: "move" }}
              >
                {"刪除資訊"}
              </DialogTitle>

              <form>
                <DialogContent>
                  <List aria-label="mailbox folders">
                    <ListItem button>
                      <ListItemText primary="編號 :" sx={{ maxWidth: "50%" }} />
                      <Chip
                        label={currentValue.id}
                        style={{ margin: "auto" }}
                      />
                    </ListItem>
                    <ListItem button>
                      <ListItemText primary="圖片 :" sx={{ maxWidth: "50%" }} />
                      <Img
                        src={IP + currentValue.img}
                        alt={index}
                        key={item.id}
                      />
                    </ListItem>
                  </List>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleDeleteClose}>取消</Button>
                  <Button type="submit">確認</Button>
                </DialogActions>
              </form>
            </Dialog>
          </>
        ))}
      </CarouselContentEdit>
    </>
  );
}
