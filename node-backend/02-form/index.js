const express = require("express");
const app = express(); //서버객체 만들고
const PORT = 8000; //포트 번호 지정해주고

app.set("view engine", "ejs"); //뷰엔진, ejs사용하겠다고 세팅

//-----기본적으로 rqq.body를 해석하기 위한 코드
//얘를 미들웨어로 등록해준 것.
app.use(express.urlencoded({ extended: true }));
//x-www-form-urlencoded 형태의 데이터를 해석
// extended: true 일 경우 qs모듈(외부모듈)을 이용한다.
// extended: false일 경우 기본 내장모듈(노드내장모듈)인 queryString을 사용한다. 이걸 결정하는 것.
app.use(express.json());
//application/json 형태의 데이터를 해석

//-----기본 라우터(localhost:8000)로 들어갔을 때 index.ejs를 보여주겠다.
//접속에 대한 응답을 위해 만든 코드.
app.get("/", function (req, res) {
  res.render("index");
});

//-----get요청은 url로 접속이 가능하다.
//이 요청과 함께 오는 데이터는 사용자가 보내는 데이터도 있다.
//이게 req.query라는 공간에 담겨져서 오는 것.
//client가 get요청으로 데이터를 보낼 때 url에 직접 query를 만들어서 전송도 가능하다.
//데이터 전송 시 form태그를 이용 할 경우 ,method를 get으로 해놓으면 get요청이 된다.
//그리고 get은 url에 전송되는 데이터가 노출된다.
//보통 get요청은 정보를 조회하는 요청에 주로 사용한다. (CRUD중에서 R를 의미하는 요청에 사용)

app.get("/get", function (req, res) {
  console.log(req.query); //{ id: 'lily', pw: '1234' }
  console.log(req.query.id); //"lily"
  //req.query;
  //get요청은 데이터를 query에 담아서 가져온다.
  //이걸로 값을 가져온다. git요청에 대해 client가 보낸 데이터를 담고 있다.
  //url에서 기본 주소 뒤에 오는 문자열을 의미한다. http://localhost:8000/get?id=lily&pw=1234
  //여기서 기본주소는 /get까지.
  //쿼리에 대한 정보가 객체로 담겨서 들어온다.

  res.send("get 요청 성공"); //send는 특정 값을 응답으로 보내겠다는 것. 객체 배열 등.
}); //get요청을 받는 /get이라는 주소를 만든 것.

//-----post ver 1
//-----loclahost:8000/post주소로 post요청을 받기 위한 준비
//post는 url로 들어갈 수 없다.url로 입력하는 무조건 get이다.
//즉 get을 위한 post주소는 없게 되는 것.
//여기서 form전송으로 post요청을 보낼 수 있다.
//post요청에 대한 데이터는 req.body에 담아서 온다
//post는 url주소로 직접 요청하는건 불가능하다.
//정보가 숨겨진다. url에 노출되지 않는다.
//보통은 데이터를 새로 생성하는 요청에 주로 사용한다. (CRUD중에서 C를 의미하는 요청에 사용)

app.post("/post", function (req, res) {
  console.log(req.body);
  res.send("post 요청 성공");
});

//-----post ver 2
app.post("/post/ver2", function (req, res) {
  console.log(req.body);
  res.render("result", {
    name: req.body.name,
    email: req.body.email,
  });
});

//get은 조회, 데이터 저장(db에 데이터 삽입), 원래 있던 데이터 변경을 위해, 데이터 삭제 등에 사용한다.
//오늘 날짜 이후꺼를 가져온다든지 등. 조건을 조회하면서 가져올 때 사용.
//CRUD라고 한다. create, read, update, delete의 약자. 이 작업이 젤 기본이다.

//post는 데이터를 새로 생성할 때 사용한다.
//얘는 데이터를 body에 실어서 전송한다.

//-----혼자 연습
app.get("/signIn", function (req, res) {
  console.log(req.query);
  res.send("회원가입 성공");
});
app.listen(PORT, function () {
  //포트 열 수 있게 해주고
  console.log(`Sever Open: ${PORT}`);
});
