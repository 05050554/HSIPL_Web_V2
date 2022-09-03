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
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { UploadImgButton } from "../ToolBox/Button";
import Styled from "styled-components";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

export const AddMembersDialog = (props) => {
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
          <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
            <InputLabel id="demo-simple-select-standard-label">
              Identify
            </InputLabel>
            <Select
              name="tag"
              onChange={props.actionInfoChange}
              defaultValue=""
            >
              <MenuItem key={"junior"} value={"junior"}>
                Junior
              </MenuItem>
              <MenuItem key={"senior"} value={"senior"}>
                Senior
              </MenuItem>
              <MenuItem key={"alumnus"} value={"alumnus"}>
                Alumnus
              </MenuItem>
            </Select>
          </FormControl>
          <br /> <br />
          <TextField
            onChange={props.actionInfoChange}
            value={props.name}
            name="name"
            label="姓名"
            variant="outlined"
            sx={{ width: 350 }}
            style={{ textAlign: "center" }}
            required="true"
          />
          <br /> <br />
          <TextField
            onChange={props.actionInfoChange}
            value={props.researchDirection}
            name="researchDirection"
            label="研究方向"
            variant="outlined"
            sx={{ width: 350 }}
            style={{ textAlign: "center" }}
            required="true"
          />
          <br /> <br />
          <TextField
            onChange={props.actionInfoChange}
            value={props.mail}
            name="mail"
            label="信箱"
            variant="outlined"
            sx={{ width: 350 }}
            style={{ textAlign: "center" }}
            required="true"
          />
          <br /> <br />
          {props.tag === "alumnus" ? (
            <TextField
              onChange={props.actionInfoChange}
              value={props.paperTopic}
              name="paperTopic"
              label="論文題目"
              variant="outlined"
              sx={{ width: 350 }}
              style={{ textAlign: "center" }}
              required="true"
            />
          ) : (
            <TextField
              name="paperTopic"
              label="論文題目"
              variant="outlined"
              sx={{ width: 350 }}
              style={{ textAlign: "center" }}
              disabled
            />
          )}
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

export const EditMembersDialog = (props) => {
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
          <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
            <InputLabel id="demo-simple-select-standard-label">
              請重新選擇身分
            </InputLabel>
            <Select
              name="tag"
              onChange={props.actionInfoChange}
              defaultValue=""
            >
              <MenuItem key={"junior"} value={"junior"}>
                Junior
              </MenuItem>
              <MenuItem key={"senior"} value={"senior"}>
                Senior
              </MenuItem>
              <MenuItem key={"alumnus"} value={"alumnus"}>
                Alumnus
              </MenuItem>
            </Select>
          </FormControl>
          <br /> <br />
          <TextField
            onChange={props.actionInfoChange}
            defaultValue={props.currentName}
            name="name"
            label="姓名"
            variant="outlined"
            sx={{ width: 350 }}
            style={{ textAlign: "center" }}
            required="true"
          />
          <br /> <br />
          <TextField
            onChange={props.actionInfoChange}
            defaultValue={props.currentResearchDirection}
            name="researchDirection"
            label="研究方向"
            variant="outlined"
            sx={{ width: 350 }}
            style={{ textAlign: "center" }}
            required="true"
          />
          <br /> <br />
          <TextField
            onChange={props.actionInfoChange}
            defaultValue={props.currentMail}
            name="mail"
            label="信箱"
            variant="outlined"
            sx={{ width: 350 }}
            style={{ textAlign: "center" }}
            required="true"
          />
          <br /> <br />
          {props.tag === "alumnus" ? (
            <TextField
              onChange={props.actionInfoChange}
              defaultValue={props.currentPaperTopic}
              name="paperTopic"
              label="論文題目"
              variant="outlined"
              sx={{ width: 350 }}
              style={{ textAlign: "center" }}
              required="true"
            />
          ) : (
            <TextField
              name="paperTopic"
              label="論文題目"
              variant="outlined"
              sx={{ width: 350 }}
              style={{ textAlign: "center" }}
              disabled
            />
          )}
         
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

export const DeleteMembersDialog = (props) => {
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
              <ListItemText primary="名字 :" sx={{ maxWidth: "50%" }} />
              <Chip label={props.currentName} style={{ margin: "auto" }} />
            </ListItem>

            <ListItem button>
              <ListItemText primary="研究目標 :" sx={{ maxWidth: "50%" }} />
              <Chip label={props.currentResearchDirection} style={{ margin: "auto" }} />
            </ListItem>

            <ListItem button>
              <ListItemText primary="信箱 :" sx={{ maxWidth: "50%" }} />
              <Chip label={props.currentMail} style={{ margin: "auto" }} />
            </ListItem>

            <ListItem button>
              <ListItemText primary="論文題目 :" sx={{ maxWidth: "50%" }} />
              <Chip label={props.currentPaperTopic} style={{ margin: "auto" }} />
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
