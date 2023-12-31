import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, TextField, Typography } from "@mui/material";
import "./Login.css";

async function loginUser(credentials) {
  return fetch("https://yandex-about-spa-test.vercel.app/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
  };

  return (
    <div className="login-wrapper">
      <Typography variant="h5">Пожалуйста авторизуйтесь</Typography>
      <form onSubmit={handleSubmit}>
        <label>
          <Typography>Логин:</Typography>
          <TextField
            type="text"
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <label>
          <Typography>Пароль</Typography>
          <TextField
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <Button type="submit">Подтвердить</Button>
        </div>
      </form>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
