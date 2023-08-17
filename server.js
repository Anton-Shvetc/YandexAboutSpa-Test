const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use("/api/login", (req, res) => {
  res.send({
    token: "test123",
  });
});

app.use(express.json());

app.post("/api/register", (req, res) => {
  const { username, password } = req.body;

  res.send({
    message: "Пользователь успешно зарегистрирован",
  });
});


const port = process.env.PORT || 8080;

app.listen(port, () =>
  console.log(`Server running on ${port}, http://localhost:${port}`)
);
