const express = require("express");
const router = express.Router();
const controller = require("../controller/Cvisitor");

//기본페이지 8000 > index.ejs render
router.get("/", controller.home);

//방명록 페이지 8000/visitors > visitor.ejs render
router.get("/visitors", controller.visitor);

//방명록 등록
router.post("/visitor", controller.postVisitor);
//ejs파일에서 폼 방명록 작성 후 등록을 누르면 onclick함수가 실행되면서 폼 내용이 전송된다.
//내용은 axios post요청으로 내용이 전달된다. 요청한 내용은 req.body에 담기고
//이 요청이 완료되면 응답으로 res를 하면서 폼에서 작성된 id, username, comment를 res.data에 추가해서 보낸다.
//추가해서 보내면서 ejs파일의 폼에 내용을 추가한다.
//axios post 요청의 내용은 req.body에 있는데 이 내용을 컨트롤러에서 어케 처리할지 다룬다.

//컨트롤러에서 요청한 데이터를 받아와서 모델에 넘겨준다. 이 데이터를 sql에서 다룰 수 있도록.
//방명록을 등록하는 postVisitor 함수를 만들고 req,res가 처리되면
//위에서 받아온 데이터가 들어있는 req.body를 모델로 보내준다.
//이 데이터를 모델에서 다루는 함수가 또 별도로 있어야 한다. 각각의 데이터는 다른 처리를 하니까.
//모델에서 방명록등록을 하는 함수를 불러와서 데이터가 담겨있는 req.body와 id를 넘긴다.
//그리고 model에 있는 함수를 들어갔다가 나오면서 res.send를 할 때 req.body값을 펼쳐서 보낸다. id와 함께.

//데이터를 다루는 model에서도 데이터를 추가하도록 하는 함수를 작성해준다.
//insertVisitors 함수에 sql쿼리문을 밖에서 미리 선언해주고
//conn.query에 쿼리문과 실행될내용을 넣어준다.
//얘는 데이터값이 들어오면 실행되어야 한다.
//인자값으로 데이터가 들어오면 sql문이 실행되고
//여기서 쿼리문으로 visitor테이블에 insert를 해주면 sql정보가 생겨나는데 여기서 생성된 insertId값을 이용한다.
//그래서 콜백함수에 result.insertId를 넣어준다.
//insertId는 바로 생기는게 아니다.
//ejs에서 요청을 해야 그 데이터가 넘어오고 쿼리문 사용을 해서 sql에 데이터를 추가 할 수 있다.
//그래서 콜백함수로 data가 먼저 들어오고, cb는 result.insertId가 생기면 진행되는셈.

//방명록 수정
router.patch("/visitor", controller.patchVisitor);

//방명록 id로조회
router.get("/visitor/:id", controller.getVisitorById);

//방명록 삭제
router.delete("/visitor/:id", controller.deleteVisitor);

module.exports = router;
