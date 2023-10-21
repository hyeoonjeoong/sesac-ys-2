const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
  res.render("index");
});

//------------get
app.get("/getPrac", function (req, res) {
  res.render("index");
  console.log(req.query);
});

//------------post로 정보 받기,

app.get("/postPrac", function (req, res) {
  res.render("index");
  console.log(req.body);
});

//------------post로 정보 받기,validation 적용하기
app.post("/postPracValidation", function (req, res) {
  res.render("index");
  console.log(req.body);
  res.send("post 요청 성공");
});

//---------------axios get
app.get("/axios", function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

//---------------axios post
// app.post("/axios", function (req, res) {
//   console.log(req.body);

//   const data ={
//   const id = "cookie";
//   const pw = "1234";}
//   res.send(data);
// });
//------------listen
app.listen(PORT, function () {});
