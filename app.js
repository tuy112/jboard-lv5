require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const port = 3000;
const router = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/api", router);

const path = require("path");

// HTML, CSS
app.use(express.static(path.join(__dirname, "assets")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "assets", "index.html"));
});

app.listen(port, () => {
  console.log(port, "포트가 열렸습니다~^^");
});
