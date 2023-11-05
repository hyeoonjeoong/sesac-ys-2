//--------------------기본 --------------------
const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
//아래 두 줄은 body를 해석하기 위한 코드.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
  res.render("index");
});
//--------------------ajax --------------------
//--------------get
//여기서는 render로 작성하지 않는다.
//html파일 자체를 보내주는게 render이다. 그럼 새 창으로 이동되는 셈.

app.get("/ajax", function (req, res) {
  console.log(req.query);
  //get 요청은 query로 데이터를 받아온다.
  //쿼리는 객체이다. 그니까 {key: value, key: value}이런 형태로 들어오게 된다.
  res.send(req.query); //send는 특정 값을 응답으로 보내겠다는 것.
});

//---------------post
//"/ajax"로 url이 같아도 메소드가 다르면 구분이 된다!
app.post("/ajax", function (req, res) {
  console.log(req.body);
  //post 요청은 body로 데이터를 받아온다.
  res.send(req.body); //send는 특정 값을 응답으로 보내겠다는 것.
});

//--------------------axios --------------------
//---------------axios get
app.get("/axios", function (req, res) {
  console.log(req.query);
  res.send(req.query);
});
//---------------axios post
app.post("/axios", function (req, res) {
  console.log("req.body", req.body);
  const data = {
    ...req.body,
    msg: "반가워요", //메시지 추가해서 send
  };
  res.send(data);
});

//--------------------fetch --------------------
//---------------fetch get
app.get("/fetch", function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

//---------------fetch post
app.post("/fetch", function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

//실습2번 참고
app.post("/~~~~~", function (req, res) {
  const id = "lily";
  const pw = "1234";
  //req.body와 id, pw를 비교하는 코드 작ㅈ성
  //일치하지않으면 ~~~"로그인실패"~
  //일치하면 "로그인 성공"
});

//--------------------listen --------------------
app.listen(PORT, function () {
  console.log("open!");
});
