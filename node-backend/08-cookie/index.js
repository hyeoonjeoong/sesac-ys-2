const express = require("express");
const app = express();
const PORT = 8000;
const cookieParser = require("cookie-parser");

app.set("view engine", "ejs");

app.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js")); // redirect bootstrap JS
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css")); // redirect CSS bootstrap

app.use(cookieParser()); //쿠키를 해석하고 사용할 수 있게 해줌

//보통 언제 만료가 될건지 등에 대한 설정을 한다.
const cookieConfig = {
  httpOnly: true,
  //--document.cookie로 접근할수있게 하는걸못하게 한다.
  //--서버에서만 쿠키에 접근할 수 있다. 저장은 브라우저에 된다. 접근은 서버로만.
  maxAge: 30000,
  //--ms단위로 보존하고자 하는 기간을 설정f
  //-- 24*60*60*1000 이런식으로 작성해도 된다.
  //expires : "2023-11-04T18:00"
  //path: "/"
  //--"/"가 기본값. 이하위에 있는 라우터는다 가장다는거
  //--"/test" -> localhost:8000/teset/~~~~~~~~
  //secure: true,
  //--https보안 서버에서만 쿠키를 동작하게 한다.
  //signed: true,
  //--쿠키를 암호화한다. 조회할때는 req.signedCookies 에서 한다.
};

app.get("/", (req, res) => {
  res.render("index");
});

//--------------------쿠키 설정하기
//서버가 응답을 보내는 형태로 설정해준다. res객체 타고 들어가야한다.
//3개 인자를 보낸다. 쿠키를 만들어서 응답으로 보낸다.
//key:key1 , value:value1, config는 위에서 설정
app.get("/set", (req, res) => {
  res.cookie("key1", "value1", cookieConfig);
  res.cookie("popup", "1", cookieConfig);
  res.send("set cookie");
});

app.get("/get", (req, res) => {
  console.log("cookies", req.cookies); //이렇게 가져오면 기본적으로 객체가 찍힌다.
  res.send(req.cookies);
});

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
