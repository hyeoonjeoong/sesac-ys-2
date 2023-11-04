const express = require("express");
const app = express();
const PORT = 8000;
const session = require("express-session");

//기본적으로 세션은 브라우저가 종료될때까지 가지고 있는다.
//제한을 두고 싶다면 cookie에서 설정할 수 있다. 중요한 정보여서 없애고 싶은 경우 등
app.use(
  session({
    secret: "secret Key",
    resave: false, //모든 요청마다 세션을 다시 저장할건지? false니까 내가 변화를 줄 때만 저장하겠다는거!
    saveUninitialized: true, //클라이언트가 처음 접속할 때 세션의 공간 자체를 초기화할건지? 보통 true로 한다고 한다.
    // cookie: {
    //   httpOnly: true, //document.cookie로는 접속 x
    //   maxAge: 10 * 60 * 1000,
    // },
    // secure: true
    //--기본값 false
    //true 면 https에서만 동작하게 하겠다.
  })
);
// app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("hello world");
});

//그럼 session은 어떻게 만드나
//클라이언트별로 저장공간이 따로 있다. 클라이언트가 보내준 세션에 아이디가 있어야한다.
//그래서 req.session 사용한다. 실제 저장공간은 서버.
app.get("/set", (req, res) => {
  console.log("1 : ", req.session);
  //로그인 성공한 시점에 req.session.user에 user를 식별할 수 있는 고유한 값을 담는다.
  req.session.user = "lily";
  console.log("2 : ", req.session);
  res.send("set session");
});

app.get("/get", (req, res) => {
  if (req.session.user) {
    res.render("profile", {});
  } else {
    res.redirect("/login");
  }
  console.log(req.session.user);
  res.send({ id: "", user: req.session.user });
});

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
