const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("prac");
});

app.post("/login", function (req, res) {
  const id = "dana";
  const pw = "1234";
  let data;
  if (req.body.id == id && req.body.pw == pw) {
    data = {
      isSuccess: true,
      msg: "로그인 성공!",
    };
  } else {
    data = {
      isSuccess: false,
      msg: "로그인 실패!",
    };
  }
  // console.log(req.body);
  res.send(data);
  //여기서 if문이 true면 그 data, false면 아래 data가 send되는 것.
});

app.listen(PORT, function () {
  console.log("SERVER OPEN!");
});
