const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//---before 라우터에 대한부분 다 index.ejs에 있었다.
//---이걸 분리하고 싶은 것.
// app.get("/", function (req, res) {
//   res.render("index");
// });
//--------------------------------------------------------

//--------------------------------------------------------
//폴더경로만 작성해줘도 된다. 알아서 index.js로 접근한다. 아래처럼 해도 된다.
// const router = require("./routes/index")
//기존의... localhost:8000/~~~~~ 여기
//뒤에 뭐가 오든 다 router 객체 안으로 들어간다.
const router = require("./routes");
app.use("/", router);
//localhost:8000/comment~~~~~

//--------------------------------------------------------
//존재하지 않는 get요청에 대해서 처리하기 위한 부분
//얘는 위치도 중요하다. 위에서 부터 읽으니까 !
//위에서 다 걸러져서 왔는데 아무도 특정한 get요청을 받아주지 않을 때 들어온다.
// *은 어떤 라우터든 상관없다는거.
app.get("*", function (req, res) {
  res.send("페이지를 찾을 수 없습니다.");
});
//--------------------------------------------------------

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
