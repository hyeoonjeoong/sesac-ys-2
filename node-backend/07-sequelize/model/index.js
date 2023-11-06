//index.js 는 sequelize를 연결하기 위한 세팅을 하는 곳

const Sequelize = require("sequelize");
const config = require("../config/config.json")["development"]; //지정된 환경변수가 없으면 development로 지정

//빈 배열의 db르 만들어준다.
const db = {};

//new Sequelize 로 mysql 연결해준다.
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

//sequelize 객체를 만든다.
//참고로 sequelize는 항상 객체를 생성해줘야 한다.
db.sequelize = sequelize; //소문자는 객체
db.Sequelize = Sequelize; //대문자는 클래스

db.Visitor = require("./Visitor")(sequelize, Sequelize);
//db.Visitor에는 sequelize로 visitor테이블을 정의한 객체가 담겨있다.

module.exports = db;
//이렇게 만든거 자체를 모듈화해서 db로 내보내기
//함수로 치면 return값
