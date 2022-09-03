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

export const AddFourDialog = (props) => {
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
            value={props.textFieldValue1}
            name={props.textFieldName1}
            label={props.textFieldLabel1}
            variant="outlined"
            sx={{ width: 350 }}
            style={{ textAlign: "center" }}
            required="true"
          />
          <br />
          <br />
          <TextField
            onChange={props.actionInfoChange}
            value={props.textFieldValue2}
            name={props.textFieldName2}
            label={props.textFieldLabel2}
            variant="outlined"
            sx={{ width: 350 }}
            style={{ textAlign: "center" }}
            required="true"
          />
          <br />
          <br />
          <TextField
            onChange={props.actionInfoChange}
            value={props.textFieldValue3}
            name={props.textFieldName3}
            label={props.textFieldLabel3}
            variant="outlined"
            sx={{ width: 350 }}
            style={{ textAlign: "center" }}
            required="true"
          />
          <br />
          <br />
          <TextField
            onChange={props.actionInfoChange}
            value={props.textFieldValue4}
            name={props.textFieldName4}
            label={props.textFieldLabel4}
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

export const EditFourDialog = (props) => {
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
            defaultValue={props.currentValue1}
            name={props.textFieldName1}
            label={props.textFieldLabel1}
            variant="outlined"
            sx={{ width: 350 }}
            style={{ textAlign: "center" }}
            required="true"
          />
          <br />
          <br />
          <TextField
            onChange={props.actionInfoChange}
            defaultValue={props.currentValue2}
            name={props.textFieldName2}
            label={props.textFieldLabel2}
            variant="outlined"
            sx={{ width: 350 }}
            style={{ textAlign: "center" }}
            required="true"
            multiline="true"
          />
          <br />
          <br />
          <TextField
            onChange={props.actionInfoChange}
            defaultValue={props.currentValue3}
            name={props.textFieldName3}
            label={props.textFieldLabel3}
            variant="outlined"
            sx={{ width: 350 }}
            style={{ textAlign: "center" }}
            required="true"
          />
          <br />
          <br />
          <TextField
            onChange={props.actionInfoChange}
            defaultValue={props.currentValue4}
            name={props.textFieldName4}
            label={props.textFieldLabel4}
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

export const DeleteFourDialog = (props) => {
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
        <DialogContent style={{ width: 400 }}>
          <List aria-label="mailbox folders">
            <ListItem button>
              <ListItemText primary="ID :" sx={{ maxWidth: "50%" }} />
              <Chip label={props.currentId} style={{ margin: "auto" }} />
            </ListItem>
            <ListItem button>
              <ListItemText
                primary={props.textFieldLabel1 + " :"}
                sx={{ maxWidth: "50%" }}
              />
              <Chip label={props.currentValue1} style={{ margin: "auto" }} />
            </ListItem>
            <ListItem button>
              <ListItemText
                primary={props.textFieldLabel4 + " :"}
                sx={{ maxWidth: "50%" }}
              />
              <Chip label={props.currentValue2} style={{ margin: "auto" }} />
            </ListItem>
            <ListItem button>
              <ListItemText
                primary={props.textFieldLabel2 + " :"}
                sx={{ maxWidth: "50%" }}
              />
              <Chip label={props.currentValue3} style={{ margin: "auto" }} />
            </ListItem>
            <ListItem button>
              <ListItemText
                primary={props.textFieldLabel3 + " :"}
                sx={{ maxWidth: "50%" }}
              />
              <Chip label={props.currentValue4} style={{ margin: "auto" }} />
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

/*****************Three Item****************** */

export const AddThreeDialog = (props) => {
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
            value={props.textFieldValue1}
            name={props.textFieldName1}
            label={props.textFieldLabel1}
            variant="outlined"
            sx={{ width: 350 }}
            style={{ textAlign: "center" }}
            required="true"
          />
          <br />
          <br />
          <TextField
            onChange={props.actionInfoChange}
            value={props.textFieldValue2}
            name={props.textFieldName2}
            label={props.textFieldLabel2}
            variant="outlined"
            sx={{ width: 350 }}
            style={{ textAlign: "center" }}
            required="true"
          />
          <br />
          <br />
          <TextField
            onChange={props.actionInfoChange}
            value={props.textFieldValue3}
            name={props.textFieldName3}
            label={props.textFieldName3}
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

export const EditThreeDialog = (props) => {
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
            defaultValue={props.currentValue1}
            name={props.textFieldName1}
            label={props.textFieldLabel1}
            variant="outlined"
            sx={{ width: 350 }}
            style={{ textAlign: "center" }}
            required="true"
          />
          <br />
          <br />
          <TextField
            onChange={props.actionInfoChange}
            defaultValue={props.currentValue2}
            name={props.textFieldName2}
            label={props.textFieldLabel2}
            variant="outlined"
            sx={{ width: 350 }}
            style={{ textAlign: "center" }}
            required="true"
            multiline="true"
          />
          <br />
          <br />
          <TextField
            onChange={props.actionInfoChange}
            defaultValue={props.currentValue3}
            name={props.textFieldName3}
            label={props.textFieldLabel3}
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

export const DeleteThreeDialog = (props) => {
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
        <DialogContent >
          <List aria-label="mailbox folders">
            <ListItem button>
              <ListItemText primary="ID :" sx={{ maxWidth: "60%" }} />
              <Chip label={props.currentId} style={{ margin: "auto" }} />
            </ListItem>
            <ListItem button>
              <ListItemText
                primary={props.textFieldLabel1 + " :"}
                sx={{ maxWidth: "60%" }}
              />
              <Chip label={props.currentValue1} style={{ margin: "auto" }} />
            </ListItem>
            <ListItem button>
              <ListItemText
                primary={props.textFieldLabel2 + " :"}
                sx={{ maxWidth: "60%" }}
              />
              <Chip label={props.currentValue2} style={{ margin: "auto" }} />
            </ListItem>
            <ListItem button>
              <ListItemText
                primary={props.textFieldLabel3 + " :"}
                sx={{ maxWidth: "60%" }}
              />
              <Chip label={props.currentValue3} style={{ margin: "auto" }} />
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

export const AddTwoDialog = (props) => {
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
            value={props.textFieldValue1}
            name={props.textFieldName1}
            label={props.textFieldLabel1}
            variant="outlined"
            sx={{ width: 350 }}
            style={{ textAlign: "center" }}
            required="true"
          />
          <br />
          <br />
          <TextField
            onChange={props.actionInfoChange}
            value={props.textFieldValue2}
            name={props.textFieldName2}
            label={props.textFieldLabel2}
            variant="outlined"
            sx={{ width: 350 }}
            style={{ textAlign: "center" }}
            required="true"
          />
          <br />
          <br />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.actionClose}>取消</Button>
          <Button type="submit">確認</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export const EditTwoDialog = (props) => {
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
            defaultValue={props.currentValue1}
            name={props.textFieldName1}
            label={props.textFieldLabel1}
            variant="outlined"
            sx={{ width: 350 }}
            style={{ textAlign: "center" }}
            required="true"
          />
          <br />
          <br />
          <TextField
            onChange={props.actionInfoChange}
            defaultValue={props.currentValue2}
            name={props.textFieldName2}
            label={props.textFieldLabel2}
            variant="outlined"
            sx={{ width: 350 }}
            style={{ textAlign: "center" }}
            required="true"
            multiline="true"
          />
          <br />
          <br />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.actionClose}>取消</Button>
          <Button type="submit">確認</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export const DeleteTwoDialog = (props) => {
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
        <DialogContent style={{ width: 400 }}>
          <List aria-label="mailbox folders">
            <ListItem button>
              <ListItemText primary="ID :" sx={{ maxWidth: "60%" }} />
              <Chip label={props.currentId} style={{ margin: "auto" }} />
            </ListItem>
            <ListItem button>
              <ListItemText
                primary={props.textFieldLabel1 + " :"}
                sx={{ maxWidth: "60%" }}
              />
              <Chip label={props.currentValue1} style={{ margin: "auto" }} />
            </ListItem>
            <ListItem button>
              <ListItemText
                primary={props.textFieldLabel2 + " :"}
                sx={{ maxWidth: "60%" }}
              />
              <Chip label={props.currentValue2} style={{ margin: "auto" }} />
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

export const AddOneDialog = (props) => {
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
            value={props.textFieldValue1}
            name={props.textFieldName1}
            label={props.textFieldLabel1}
            variant="outlined"
            sx={{ width: 350 }}
            style={{ textAlign: "center" }}
            required="true"
          />
          <br />
          <br />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.actionClose}>取消</Button>
          <Button type="submit">確認</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export const EditOneDialog = (props) => {
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
            defaultValue={props.currentValue1}
            name={props.textFieldName1}
            label={props.textFieldLabel1}
            variant="outlined"
            sx={{ width: 350 }}
            style={{ textAlign: "center" }}
            required="true"
          />
          <br />
          <br />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.actionClose}>取消</Button>
          <Button type="submit">確認</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export const DeleteOneDialog = (props) => {
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
        <DialogContent style={{ width: 400 }}>
          <List aria-label="mailbox folders">
            <ListItem button>
              <ListItemText primary="ID :" sx={{ maxWidth: "60%" }} />
              <Chip label={props.currentId} style={{ margin: "auto" }} />
            </ListItem>
            <ListItem button>
              <ListItemText
                primary={props.textFieldLabel1 + " :"}
                sx={{ maxWidth: "60%" }}
              />
              <Chip label={props.currentValue1} style={{ margin: "auto" }} />
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
