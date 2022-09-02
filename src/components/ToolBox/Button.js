import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";
import { styled } from "@mui/material";

export const AddBtn = (props) => {
  return (
    <>
      <Button variant="contained" color="success" onClick={props.action} >
        {" "}
        <AddCircleOutlineIcon />
        新增
      </Button>
    </>
  );
};

export const EditBtn = (props) => {
  return (
    <>
      <Tooltip title="修改">
        <Button variant="contained" onClick={props.action}>
          <EditIcon style={{ fontSize: "30" }} />
          Edit
        </Button>
      </Tooltip>{" "}
    </>
  );
};

export const DeleteBtn = (props) => {
  return (
    <>
      <Tooltip title="刪除">
        <Button
          variant="contained"
          color="error"
          onClick={props.action}
        >
          <DeleteIcon style={{ fontSize: "30" }} />
          Delete
        </Button>
      </Tooltip>
    </>
  );
};

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