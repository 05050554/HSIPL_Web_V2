import {
  DialogTitle,
  Dialog,
  DialogActions,
  DialogContent,
  List,
  ListItem,
  Chip,
  ListItemText,
} from "@mui/material";
import Button from "@mui/material/Button";
import { UploadImgButton } from "../ToolBox/Button";
import Styled from "styled-components";

export const AddAboutCarouselDialog = (props) => {
  return (
    <Dialog
      open={props.actionOpen}
      onClose={props.actionClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      onBackdropClick="false"
      maxWidth="xs"
    >
      <DialogTitle
        id="alert-dialog-title"
        style={{ textAlign: "center", cursor: "move" }}
      >
        {props.titleName}
      </DialogTitle>

      <form onSubmit={props.actionSubmit}>
        <DialogContent style={{ textAlign: "center" }}>
          <UploadImgButton
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
            onChange={props.actionImg}
          />
          <img width="200#" src={props.image} alt={props.image} />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.actionClose}>取消</Button>
          <Button type="submit">確認</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export const EditAboutCarouselDialog = (props) => {
  const Img = Styled.img`
  margin: auto;
  width: 60%;
`;
  return (
    <Dialog
      open={props.actionOpen}
      onClose={props.actionClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      onBackdropClick="false"
      maxWidth="xs"
    >
      <DialogTitle
        id="alert-dialog-title"
        style={{ textAlign: "center", cursor: "move" }}
      >
        {props.titleName}
      </DialogTitle>

      <form onSubmit={props.actionSubmit}>
        <DialogContent style={{ textAlign: "center" }}>
          <Img
            src={props.IP + props.currentImg}
            alt={props.currentImg}
            key={props.number}
          />
          <UploadImgButton
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
            onChange={props.actionImg}
          />
          <img width="200#" src={props.image} alt={props.image} />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.actionClose}>取消</Button>
          <Button type="submit">確認</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};


export const DeleteAboutCarouselDialog = (props) => {
    const Img = Styled.img`
    margin: auto;
    width: 60%;
  `;
    return (
        <Dialog
        open={props.actionOpen}
        onClose={props.actionClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        onBackdropClick="false"
        maxWidth="xs"
      >
        <DialogTitle
          id="alert-dialog-title"
          style={{ textAlign: "center", cursor: "move" }}
        >
          {props.titleName}
        </DialogTitle>

        <form onSubmit={props.actionSubmit}>
          <DialogContent>
            <List aria-label="mailbox folders">
              <ListItem button>
                <ListItemText primary="編號 :" sx={{ maxWidth: "50%" }} />
                <Chip
                  label={props.currentID}
                  style={{ margin: "auto" }}
                />
              </ListItem>
              <ListItem button>
                <ListItemText primary="圖片 :" sx={{ maxWidth: "50%" }} />
                <Img
                  src={props.IP + props.currentImg}
                  alt={ props.currentImg}
                  key={props.number}
                />
              </ListItem>
            </List>
          </DialogContent>
          <DialogActions>
            <Button onClick={props.actionClose}>取消</Button>
            <Button type="submit">確認</Button>
          </DialogActions>
        </form>
      </Dialog>
    );
  };