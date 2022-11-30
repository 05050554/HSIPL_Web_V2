import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import {
  styled,
  Dialog,
  DialogTitle,
  TextField,
  Button,
  Alert,
  Stack,
} from "@mui/material";
import styled2 from "styled-components";
import Link from "@mui/material/Link";

const LoginContainer = styled(Dialog)({
  ".MuiBackdrop-root": {
    backgroundColor: "#F3F3FA",
  },
});

const Input = styled(TextField)({
  margin: "1rem 5rem",
  width: "40vh",
});

const Submit = styled(Button)({
  margin: "auto",
  width: "30%",
});

const Wrong = styled(Alert)({
  margin: "1rem 5rem",
});

const BtnSty = styled2.div`
   display:flex;
   height:5rem;
   padding:5%;
   margin-bottom:3rem;
`;

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();
  const [userLogin, setUserLogin] = useState(false);
  const [errMes, setErrMes] = useState("");

  let navigate = useNavigate();
  const url = "http://140:125:45:164:6969/api/user/login/";
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",

    },
  };

  useEffect(() => {
    if (localStorage.getItem("user-info") || userLogin) {
      history.push("/");
    }
  });

  function handleUsername(e) {
    setUserName(e.target.value);
  }

  function handlePassWord(e) {
    setPassword(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(url, { username, password }, config)
      .then((result) => {
        let UserInfo = result.data;
        console.log(UserInfo.token);
        localStorage.setItem("token", JSON.stringify(UserInfo.token));
        navigate("/Edit");
      })
      .catch((err) => {
        console.log(err);
        setUserLogin(false);
        setErrMes(0);
      });
  }

  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };
  return (
    <>
      <LoginContainer open="true" maxWidth="xl">
        <DialogTitle
          sx={{ fontWeight: "bold", textAlign: "center", paddingTop: "8%" }}
        >
          登入至管理者模式
        </DialogTitle>
        <form onSubmit={handleSubmit}>
          <Stack m={2}>
            <Input
              autoFocus
              placeholder="帳號"
              value={username}
              onChange={handleUsername}
              required
              label="帳號"
            />
            <Input
              id="InputPassword"
              type="password"
              placeholder="密碼"
              value={password}
              onChange={handlePassWord}
              required
              label="密碼"
              onKeyPress={handleKeypress}
            />
            {errMes === 0 && <Wrong severity="warning">帳號或密碼錯誤</Wrong>}
          </Stack>
        </form>
        <BtnSty>
          <Submit id="ButtonSubmit" variant="contained" type="submit">
            <Link href="/" style={{ color: "white" }}>
              {" "}
              返回網站
            </Link>
          </Submit>
          <Submit
            id="ButtonSubmit"
            variant="contained"
            type="submit"
            onClick={handleSubmit}
          >
            登入
          </Submit>
        </BtnSty>
      </LoginContainer>
    </>
  );
};

export default Login;
