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
//--------------get

app.get("/ajax", function (req, res) {
  //여기서는 렌더 안한다.ㅏ html파일 자체를 보내주는게 렌더이다.
  //겟 요청은 쿼리로 데이터를 받아온다.
  console.log(req.query);
  //쿼리는 객체이다. 그니까 {key: value, key: value}이런 형태로 들어온다.
  // { key: value, key: value }
  res.send(req.query); //이러케 받는거 만들ㅓ주고ㅛ
});
//---------------post
//url같아도 메소드가 다르면 구분이 된다.
app.post("/ajax", function (req, res) {
  //여기서는 렌더 안한다.ㅏ html파일 자체를 보내주는게 렌더이다.
  //겟 요청은 쿼리로 데이터를 받아온다.

  console.log(req.body);
  //쿼리는 객체이다. 그니까 {key: value, key: value}이런 형태로 들어온다.
  res.send(req.body); //이러케 받는거 만들ㅓ주고ㅛ
});
//---------------axios get
app.get("/axios", function (req, res) {
  console.log(req.query);
  res.send(req.query);
});
//---------------axios post
app.post("/axios", function (req, res) {
  console.log(req.body);
  const data = {
    ...req.body,
    msg: "반가워요", //메시지 추가해서 send
  };
  res.send(data);
});
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

//---------------listen
app.listen(PORT, function () {
  console.log("open!");
});
