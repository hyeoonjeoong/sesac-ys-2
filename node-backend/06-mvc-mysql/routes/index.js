//뭘 렌더할지 미리 적어주자.
//기본주소에 대한거 필요하고
//~~~~~~:8000/ -> index.ejs 를 렌더하는 코드
//visitor 필요하고
////~~~~~~:8000/visitor -> visitor.ejs 를 렌더하는 코드
//일단 라우터에 다 작성하고 컨트롤러로 뺄 거 뺴줘도 된다.

const express = require("express");
const router = express.Router();
const controller = require("../controller/Cvisitor");

//기본주소에 대한거
//~~~~~~:8000/ -> index.ejs 를 렌더하는 코드
//기본
router.get("/", controller.home);

//~~~~~~:8000/visitor -> visitor.ejs 를 렌더하는 코드
//메인페이지
router.get("/visitors", controller.visitor);

//방명록 등록
router.post("/visitor", controller.postVisitor);

//방명록 수정
router.patch("/visitor/:id", function (req, res) {
  res.send("");
});

//방명록 삭제
router.delete("/visitor/:id", controller.deleteVisitor);

module.exports = router;
