const express = require("express");
const app = express();
const PORT = 8000;
const session = require("express-session");

app.set("view engine", "ejs");
app.use(express.json());

//기본적으로 세션은 브라우저가 종료될때까지 가지고 있는다.
//제한을 두고 싶다면 cookie에서 설정할 수 있다. 중요한 정보여서 없애고 싶은 경우 등
app.use(
  session({
    secret: "secret Key",
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true, //document.cookie로는 접속 x
    },
  })
);

app.get("/", (req, res) => {
  res.render("prac", { user: req.session.user });
});

app.get("/set", (req, res) => {
  console.log("1 : ", req.session);
  req.session.user = "banana";
  res.send(req.session.user);
});

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
