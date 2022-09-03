import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styled from "styled-components";
import { HeaderTitle } from "../ToolBox/StyledGlobale";
import Button from "@mui/material/Button";
import EditRender from "./EditRender";
import { useNavigate } from "react-router";
import LogoutIcon from "@mui/icons-material/Logout";
const item = [
  { name: "Photos of life", value: "1" },
  { name: "News", value: "2" },
  { name: "Honor and Awards", value: "3" },
  { name: "Research Interests", value: "4" },
  { name: "Members", value: "5" },
  // { name: "Junior Students", value: "6" },
  // { name: "Alumnus", value: "7" },
  { name: "Professor Education", value: "6" },
  { name: "Professor Research Experience", value: "7" },
  { name: "Professor Journal Articles", value: "8" },
  { name: "Professor Talks", value: "9" },
  { name: "Professor Service", value: "10" },
  { name: "Professor Conference", value: "11" },
  { name: "Professor Awards", value: "12" },
  { name: "Professor Research Posters", value: "13" },
  { name: "Grant Support and Projects", value: "14" },
  { name: "Equipment", value: "15" },
];

const EditCon = styled.div`
  font-family: Signika, sans-serif;
  font-size: 3rem;
  text-align: center;
  padding-top: 3%;
`;

const HeaderCon = styled.div`
  font-family: Signika, sans-serif;
  font-size: 3rem;
  text-align: center;
  padding-bottom: 3%;
`;

export { EditCon };

const Edit = () => {
  const [getSelect, setGetSelect] = useState("");
  const handleChange = (e) => {
    setGetSelect(e.target.value);

  };
  let navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/Login");
  };

  return (
    <>
      <EditCon>
        <HeaderCon>
          <HeaderTitle>Hello, HSIPL Web Administrator!</HeaderTitle>
          <Button variant="contained" onClick={handleLogout}>
            <LogoutIcon />
            Logout
          </Button>
        </HeaderCon>

        <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
          <InputLabel>請選擇欲採取動作之資料</InputLabel>
          <Select onChange={handleChange} autoWidth>
            {item.map((items) => (
              <MenuItem key={items.value} value={items.value}>
                {items.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </EditCon>
      <EditRender select={getSelect} />
    </>
  );
};

export default Edit;
