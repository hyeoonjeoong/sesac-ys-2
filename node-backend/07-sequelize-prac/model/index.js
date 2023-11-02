//index.js 는 sequelize를 연결하기 위한 세팅을 하는 곳

const Sequelize = require("sequelize");
const config = require("../config/config.json")["development"]; //지정된 환경변수가 없으면 development로 지정

const db = {};

//new Sequelize 로 mysql 연결해준다.
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password
);

db.sequelize = sequelize; //소문자는 객체
db.Sequelize = Sequelize; //대문자는 클래스
//참고로 sequelize는 항상 객체를 생성해줘야 한다.

db.User = require("./User")(sequelize, Sequelize);

module.exports = db;
//이렇게 만든거 자체를 모듈화해서 db로 내보내기
//함수로 치면 return값
