import {
  DialogTitle,
  Dialog,
  DialogActions,
  DialogContent,
  List,
  ListItem,
  Chip,
  ListItemText,
  TextField,
} from "@mui/material";
import Button from "@mui/material/Button";
import { UploadImgButton } from "../ToolBox/Button";
import Styled from "styled-components";

export const AddEquipmentDialog = (props) => {
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
          <TextField
            onChange={props.actionInfoChange}
            value={props.title}
            name="title"
            label="相機全名"
            variant="outlined"
            sx={{ width: 350 }}
            style={{ textAlign: "center" }}
            required="true"
          />
          <br/><br/>
          <TextField
            onChange={props.actionInfoChange}
            value={props.tag}
            name="tag"
            label="相機縮寫"
            variant="outlined"
            sx={{ width: 350 }}
            style={{ textAlign: "center" }}
            required="true"
          />
          <UploadImgButton
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
            onChange={props.actionImg}
          />
          <img
            width="200#"
            src={props.image}
            alt={props.image}
            style={{ paddingTop: 30, paddingBottom: 30 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.actionClose}>取消</Button>
          <Button type="submit">確認</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export const EditEquipmentDialog = (props) => {
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
        <TextField
            onChange={props.actionInfoChange}
            defaultValue={props.currentTitle}
            name="title"
            label="相機全名"
            variant="outlined"
            sx={{ width: 350 }}
            style={{ textAlign: "center" }}
            required="true"
            multiline="true"
          />
          <br/><br/>
          <TextField
            onChange={props.actionInfoChange}
            defaultValue={props.currentTag}
            name="tag"
            label="相機簡寫"
            variant="outlined"
            sx={{ width: 350 }}
            style={{ textAlign: "center" }}
            required="true"
          />
          <Img
            src={props.IP + props.currentImg}
            alt={props.currentImg}
            key={props.number}
            style={{ paddingTop: 30, paddingBottom: 30 }}
          />
          <UploadImgButton
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
            onChange={props.actionImg}
          />
          <img
            width="200#"
            src={props.image}
            alt={props.image}
            style={{ paddingTop: 30, paddingBottom: 30 }}
          />
          
        </DialogContent>
        <DialogActions>
          <Button onClick={props.actionClose}>取消</Button>
          <Button type="submit">確認</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export const DeleteEquipmentDialog = (props) => {
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
              <Chip label={props.currentID} style={{ margin: "auto" }} />
            </ListItem>
            <ListItem button>
              <ListItemText primary="相機全名 :" sx={{ maxWidth: "50%" }} />
              <Chip label={props.currentTitle} style={{ margin: "auto" }} />
            </ListItem>
            <ListItem button>
              <ListItemText primary="相機簡寫 :" sx={{ maxWidth: "50%" }} />
              <Chip label={props.currentTag} style={{ margin: "auto" }} />
            </ListItem>
            <ListItem button>
              <ListItemText primary="圖片 :" sx={{ maxWidth: "50%" }} />
              <Img
                src={props.IP + props.currentImg}
                alt={props.currentImg}
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
