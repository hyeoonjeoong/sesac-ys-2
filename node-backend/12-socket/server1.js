const http = require("http"); //http모듈 불러온다. 그리고 얘와 app을 연결해줘야 한다.
const express = require("express");
const app = express();
//소켓은 http모듈로 생성 된 서버에서만 동작한다.
const server = http.createServer(app);
const PORT = 8000;

const io = require("socket.io")(server);
//---풀어서 써보자 (아래꺼를 줄여서 쓴게 위에꺼)
// const socket = require("socket.io")
// const io = socket(server)

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("client1");
});

//이벤트 등록. 연결 받을 수 있도록 등록해놓은 것.
io.on("connection", (socket) => {
  //콜백함수의 매개변수로는 접속한 client의 socket객체가 들어온다.
  //접속한 클라이언트의 소켓이다.
  console.log("socket.id", socket.id);

  //---on을 이용해 클라이언트에서 socket을 이용해 보내준 데이터를 받을 이벤트를 등록.
  //이벤트가 발생될 때 실행한다. 클라이언트에서 hello라는 데이터를 보낼 때 발생하는 것.
  //클라이언트에서 hello버튼을 누르면 데이터 전송, 받아서 실행되는 방식
  socket.on("hello", (res) => {
    //res에는 socket을 이용해 보내준 데이터를 받아올 수 있다.
    //hello라는 이벤트 이름으로 실행되는것.
    console.log(res);
    socket.emit("bye", { msg: "안녕히 가세요" });
    //얘는 bye라는 이벤트 이름으로 보내니, 클라이언트에서도 bye라는 이름으로 받아야 한다.
  });

  socket.on("entry", (res) => {
    console.log(res);
    io.emit("notice", { msg: `${socket.id}님이 입장했습니다.` });
  });

  //-----실습
  socket.on("hi", (res) => {
    console.log(res);

    socket.emit("hiRes", { msg: "헬로" });
  });
  socket.on("study", (res) => {
    console.log(res);

    socket.emit("studyRes", { msg: "스터디" });
  });
  socket.on("byeBye", (res) => {
    console.log(res);

    socket.emit("byeByeyRes", { msg: "바이" });
  });
});

server.listen(PORT, function () {
  console.log("server open");
});
