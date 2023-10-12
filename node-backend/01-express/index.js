const express = require("express");
//express 모듈import
//노드모듈 안만들었으면 못불러온다.
const app = express(); //server객체를 만들 수 있다.
const PORT = 8000; //포트
//포트번호는 1~65536까지 존재한다. 1~1023까지는 정해진 기능이 있다.
//3000,8000,8080,3010,3001 이런거 사용
//3306은 mysql에서 사용하기때문에 피하자.

//-------------------------------------------------
//서버객체를 설정하는 메소드로 생각 set
//인자는 총 두개 넣을 수 있다. 어떤 설정을 바꿀건지에 대한 설정이름, 설정값 작성)
//app객체의 view engine 설정을 ejs로 변경하겠다.
app.set("view engine", "ejs");
//app객체의 view폴더 설정. 기본값은 ./views
//만약 현재위치의 뷰폴더로 바꾸고 싶다면 아래처럼 작성
//이 프론트엔드 코드를 어디에 모아둘거냐?
// app.set("views", "./view") //이게 기본값
//-------------------------------------------------
app.use("/static", express.static(__dirname + "/static"));
//~~~/01-express/static에 클라이언트가 /static 이름으로 들어올 수 잇다.
// app.use("/public", express.static(__dirname + "/static"));
// ~~~~/01-express/static에 클라이언트가 /puplic 이름으로 들어올 수 있다.
//-------------------------------------------------

//get메소드 (http메소드) : 클라이언트가 요청할 수 있는 방법들을 정의함. 이런거 중에 get메소드가 있는 것.
//get은 요청의 종류 중 하나이다.
//대표적으로get요청을 하는 경우는? 특정url을 입력하는순간이 get요청이 되는순간
//여기서 슬래시는?
//localhost:8000/ 이렇게 하면 들어갈 수 있다.
//이거에 의해브라우저에 접속하게 되는것.  이거 작성안하면 서버요청에 대한 설정을 안한거기때문에 이거 작성해줘야한다.
app.get("/", function (req, res) {
  //요청받았을때 뭐할건지 여기 작성
  res.send("hello express"); //응답객체 내의 send메소드를 실행하고있는것. 응답을 전송하겠다(뭘 전송할건지 작성)
});
//http 메소드의 두번째 인자로 넘겨주는 콜백함수의 매개변수 2개가 오는데
//첫번째 매개변수는 request객체 (요청) . 여기에 요청을 받을 수 있다고 하는거.
//두번째 매개변수는 response 객체 (응답). 서버가 응답할 수 있는 객체인것.

//localhost:8000/test 이 주소로 들어가고싶으면?
app.get("/test", function (req, res) {
  //요청받았을때 뭐할건지 여기 작성
  //   res.send("get test");
  //응답객체 내의 send메소드를 실행하고있는것. 응답을 전송하겠다(뭘 전송할건지 작성)
  //send괄호안에 div나 css요소 작성해도 먹힌다. 근데 이런 긴 html요소ㅓ 다 적을순 없다.
  console.log(__dirname); // C:\Users\Spreatics\Desktop\lecture\sesac-ys2-workspace\node-backend\01-exprees
  res.sendFile(__dirname + "/index.html");
  //__dirnam 노드에서 갖고있는전역변수.  console로 찍어봐도된다. 파일이 위치하는 절대위치가 찍힌다.

  //전역변수말고 그냥 아래처럼하면 안된다. 노드내에서 실행하는 파일중 상대경로로 접근할수 있는건 없다.
  //모듈가져오거 할때는 가능. 그것도 결국 노드 내에서 가져오는것.
  //일반적으로 html을 가져온다든가 .. 이걸 랜드해서 브라우저상에 보여주는건 안된다.  상대경로는 못사용한다고 생각.
  //노드 내에서 서버를 만들어서 어떤 파일에 접근하려고 할 때 html상대경로로는 접근을 못한다!
  //   res.sendFile("/index.html");
});

//-------------------------------------------------
//localhos:8000/ejs이걸로 접속
//test폴더 밖에 있는 ejs
// app.get("/ejs", function (req, res) {
//   //render 메소드의 기본 dir은 현재위치의 views라는 폴더 안 ./views
//   res.render("index.ejs");
// });

//localhost:8000/ejs이걸로 접속
//이 라우터로 들어왔을 때 아래 내용을 값으로 받겠다.
//test폴더 안에 있는 ejs. 확장자 안적어도된다.
app.get("/ejs", function (req, res) {
  res.render("test/index");
});

//localhos:8000/lily이걸로 접속
// app.get("/lily", function (req, res) {
//   res.render("lily");
// });

//데이터 이렇게 내보낼수있다?
//여기 서버측에서 보낸 key가 변수이름이 된다. lily ejs에서 사용할수있는?

app.get("/lily", function (req, res) {
  res.render("lily", {
    name: "lily",
    product: ["운동화", "후드", "슬리퍼"],
  });
});
//-------------------------------------------------
//서버를 연다는 의미. app에 있는 listen메소드를 열거다.
//매개변수는 두개온다. 어떤 포트로 열건지 포트번호, 이벤트에 대ㅎ한 콜백함수가 들어온다.
//서버가 열리면 어떤동작을 할건지.
//서버가 열리면 localhost:8000 이라는 주소로 인터넷에 접속할수있게된다.
//127.0.0.1:8000 이 아이피는 내컴퓨터의미한다.
//해당주소로 접속할 수 있는 하나의 서버를 만든다고 생각.
app.listen(PORT, function () {
  console.log(`server open ${PORT}`);
});
