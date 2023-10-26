//router를 모아서 사용할 수 있는 기능을 제공한다. express에서 사용하는 router를 모아놓은 객체.
//router객체 자체는 결국 하나의 미들웨어로 사용된다.
//이거는 여기만 있으면 안된다. 결국 실행하는건 젤 최상단에 있는 index.js이다.
//그니까 얘네를 연결시켜줘야 한다. export가 되어야한다. 모듈로써 내보내져야 한다.
const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain"); //컨트롤러 불러와

//요청에 대한 정보를 모아둠

//localhost:8000
router.get("/", controller.main);

//localhost:8000/comments
router.get("/comments", controller.comments);

module.exports = router; //router객체 자체를 넘겨주면 된다.
