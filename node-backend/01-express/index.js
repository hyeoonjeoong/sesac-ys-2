//express모듈을 가져온다. 노드 모듈이 없다면 당연히 불러올 수 없다.
const express = require("express");

//가져온 express모듈을 app이라는 변수에 담아 express프레임워크를 시작하겠다.
//이제 server객체를 만들 수 있다.
const app = express();

//포트번호를 지정해준다.
const PORT = 8000;
//포트번호는 1~65536까지 존재한다. 1~1023까지는 정해진 기능이 있다.
//3000,8000,8080,3010,3001등을 사용한다.
//포트가 이미 사용중인게 아니라면 어떤 포트번호든 상관은 없다.
//3306은 mysql에서 사용하기때문에 피하자.

//-------------------------------------------------
//set은 서버 객체를 설정해주는 메소드로 생각하자.
//인자는 두 개 넣을 수 있다.
//1) 바꾸싶은 설정이 가지고 있는 이름, 2) 변경 할 설정값
//app객체의 view engine 설정을 ejs로 변경하겠다.
app.set("view engine", "ejs");

//이렇게 설정이 되고 나면 새로운 express가 만들어지고
//앞으로 view engine을 사용할 때 express는 views나 템플릿이 views디렉토리 안에 있다고 가정하게 된다.
//간단히 ejs파일들이 views폴더에 모아서 담겨져 있다고 생각하면 된다!
//app객체의 view폴더 설정하게 되는 것. 아래가 기본값!
app.set("views", "./views");

//만약 ./view 폴더로 바꾸고 싶다면? 아래 형식으로 작성하면 된다.
// app.set("views", "./view")
//-------------------------------------------------
app.use("/static", express.static(__dirname + "/static"));
//~~~/01-express/static에 클라이언트가 /static 이름으로 들어올 수 잇다.
// app.use("/public", express.static(__dirname + "/static"));
// ~~~~/01-express/static에 클라이언트가 /puplic 이름으로 들어올 수 있다.
//-------------------------------------------------

//get메소드의 기본 형태

app.get("/", function (req, res) {
  //'/' 위치의 브라우저로 접속 요청을 받았을 시 실행할 것 작성
});

//get메소드가 받아오는 인자는 (req, res)이다.
//첫번째 매개변수는 request객체(요청) . 여기에 요청을 받을 수 있다고 하는거.
//두번째 매개변수는 response객체(응답). 서버가 응답할 수 있는 객체인것.

//여기서 슬래시('/')의 의미는?
//슬래시에 의해 브라우저에 접속하게 되는 것으로 생각하자.
//'/' 위치의 브라우저로 접속했을 시.
//포트번호를 8000으로 지정했다면
//localhost:8000/ 이렇게 입력해 웹브라우저를 들어갈 수 있다.
//'/' 작성을 안하면 서버요청에 대한 설정을 안했다는 것. 꼭 설정해줘야 한다.

//이렇게 작성!

app.get("/", function (req, res) {
  res.send("hello express");
});

// '/' 위치의 브라우저로 접속했을 시.
// response객체(응답)의 send메소드를 실행.
// 어떤걸 전송할건지?
// "hello express" 가 브라우저 화면에 나타난다.

//-------------------------------------------------
//위의 상황에서는 localhost:8000/ 이라는 주소로 인터넷에 접속할 수 있다.
//const PORT = 8000;으로 지정했기 때문.
//그럼 동일한 상황에서 localhost:8000/test 이 주소로 들어가고 싶다면?

app.get("/test", function (req, res) {
  res.send("localhost:8000/test 로 들어왔습니다.");
});

//그리고!!!
//send 메소드에는 div나 css요소 작성해도 먹힌다!
//그런데 html의 내용이 길다면? 파일 자체를 제공하는 것이 더 좋겠다.
//이 때 sendFile메소드를 이용한다.
//상대경로로는 접근이 안되기 때문에 우선 HTML파일의 절대경로를 구해야한다.
app.get("/test", function (req, res) {
  res.send("<div style='color: red'> 안녕 </div>");
  //div나 css요소 작성해도 먹힌다!

  console.log(__dirname);
  //__dirname 을 사용해보자.
  //현재의 파일(file)이 위치한 폴더(directory)의 절대경로(absolute path)를 알려줍니다.

  res.sendFile(__dirname + "/index.html");
  // 이런식으로 사용 가능!

  //__dirnam 노드에서 갖고있는전역변수.  console로 찍어봐도된다. 파일이 위치하는 절대위치가 찍힌다.

  //전역변수말고 그냥 아래처럼하면 안된다. 노드내에서 실행하는 파일중 상대경로로 접근할수 있는건 없다.
  //모듈가져오거 할때는 가능. 그것도 결국 노드 내에서 가져오는것.
  //일반적으로 html을 가져온다든가 .. 이걸 랜드해서 브라우저상에 보여주는건 안된다.  상대경로는 못사용한다고 생각.
  //노드 내에서 서버를 만들어서 어떤 파일에 접근하려고 할 때 html상대경로로는 접근을 못한다!
  res.sendFile("/index.html");
});

//-------------------------------------------------
//localhost:8000/ejs이걸로 접속

//폴더 구조가 [메인폴더 > ejs파일] 이고,
//[메인폴더 > test 폴더 > ejs파일]인 경우

//[메인폴더 > ejs파일] (test폴더 밖에 있는 ejs)
app.get("/ejs", function (req, res) {
  //render 메소드의 기본 dir은 현재위치의 views라는 폴더 안 ./views

  res.render("index.ejs");
});

//[메인폴더 > test 폴더 > ejs파일] (test폴더 안에 있는 ejs)
//localhost:8000/ejs이걸로 접속
//이 라우터로 들어왔을 때 아래 내용을 값으로 받겠다.
app.get("/ejs", function (req, res) {
  res.render("test/index");
});

//데이터 이렇게도 내보낼수있다?
//  `res.render("화면 이름", 화면에 전달할 값 {key : 'value'});`
//  어떤 차이냐면!
//  위는 파일 자체를 렌더링해서 해당 주소로 들어가면 해당 파일이 보여지는 것이고
//  아래 내용은 `lily.ejs` 라는 파일이 있다면. 그 파일에 값을 보낸다. 그리고 해당 주소를 웹브라우저에서 열었을 때,  `lily.ejs` 기존에 작성되어있던 내용과 보내진 key 값들이 사용되어 화면에 나타난다.

app.get("/lily", function (req, res) {
  res.render("lily", {
    name: "lily",
    product: ["운동화", "후드집업", "스웨터"],
  });
});
//즉 lily.ejs 라는 파일에서 사용할 수 있는 값들을 보내준다고 보면 된다.
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
