const express = require("express");
const path = require("path"); //path사용하기위해 모듈 가져오고
const app = express();
const PORT = 8000;
//환경변수 파일 필요하다. 확장자명은 .env이다.
const dotenv = require("dotenv");

//기본적으로 노드에서 사용하는 환경변수는 무엇인가
// console.log(process.env);

//cross-env (npm으로 설치해줘야 한다.)
//프로젝트를 실행시키는 환경에 따라서 다른 env파일을 쓰도록 해준다.
//배포버전이냐 개발버전이냐에 따라 다른 env파일을 로드할 수 있도록 해준다.

//path를 직접 불러올수도 있다. 항상 index.js와 같은 위치가 아닐수도 있고 파일명이 다를수도 있다.
//path로 경로를 만들어주는
dotenv.config({ path: path.join(__dirname, "./config/envs/.env") });
dotenv.config({
  path: path.join(__dirname, `./config/envs/${process.env.NODE_ENV}.env`),
});
//여기서 NODE_ENV는 패키지 제이슨에서 만들어준거. develpmine가 들어와있는거

//기존꺼에 내가 환경변수를 만들어서 추가할 수도 있다.
//지금 실행시키는 index.js와 같은 위치에 있는 .env파일을 불러와서 하나의 환경변수로 사용할 수 있도록 처리해준다.
//.env에 작성된 환경변수가 여기로 들어오게 된다.
dotenv.config();
console.log("test var 콘솔: ", process.env.TEST_VAR);
console.log("패스워드 콘솔: ", process.env.PASSWORD);

app.get("/", (req, res) => {
  res.send("hello world");
});

//코드에서 사용할때는 이런식으로 변수명으로 불러와서 사용한다.
app.listen(process.env.PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
