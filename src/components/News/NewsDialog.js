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

export const AddNewsDialog = (props) => {
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
            value={props.date}
            name="date"
            label="日期 (格式: yyyy-mm-dd)"
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
          <img width="200#" src={props.image} alt={props.image}  style={{paddingTop:30,paddingBottom:30}} />
          <TextField
            onChange={props.actionInfoChange}
            value={props.content}
            name="content"
            label="內容"
            variant="outlined"
            sx={{ width: 350 }}
            style={{ textAlign: "center" }}
            required="true"
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

export const EditNewsDialog = (props) => {
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
            defaultValue={props.currentDate}
            name="date"
            label="日期 (格式: yyyy-mm-dd)"
            variant="outlined"
            sx={{ width: 350 }}
            style={{ textAlign: "center" }}
            required="true"
          />
          <Img
            src={props.IP + props.currentImg}
            alt={props.currentImg}
            key={props.number}
            style={{paddingTop:30,paddingBottom:30}}
          />
          <UploadImgButton
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
            onChange={props.actionImg}
          />
          <img width="200#" src={props.image} alt={props.image} style={{paddingTop:30,paddingBottom:30 }}/>
          <TextField
            onChange={props.actionInfoChange}
            defaultValue={props.currentContent}
            name="content"
            label="內容"
            variant="outlined"
            sx={{ width: 350 }}
            style={{ textAlign: "center" }}
            required="true"
            multiline="true"
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

export const DeleteNewsDialog = (props) => {
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
