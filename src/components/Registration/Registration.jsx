import React, { useState } from "react";



function Registration() {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const handleSubmit = (e) => {
  e.preventDefault();

  // Создайте объект с данными для отправки на сервер
  const data = {
    username: username,
    password: password
  };

  fetch("http://localhost:8080/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      // Обработайте ответ от сервера
      console.log(data);
    })
    .catch((error) => {
      // Обработайте возможные ошибки
      console.error(error);
    });
};

return (
  <form onSubmit={handleSubmit}>
    <label>
      Username:
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </label>
    <br />
    <label>
      Password:
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </label>
    <br />
    <button type="submit">Register</button>
  </form>
);
}
export default Registration;

