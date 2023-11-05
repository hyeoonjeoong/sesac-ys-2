const Visitor = require("../model/Visitor");

//기본 index파일 home으로 내보내기. index.ejs 렌더
exports.home = (req, res) => {
  res.render("index");
};

exports.visitor = (req, res) => {
  Visitor.getVisitors((rows) => {
    res.render("visitor", { data: rows });
  });
};

//방명록 작성하기 insert
exports.postVisitor = (req, res) => {
  console.log("컨트롤러 req.body", req.body);
  Visitor.insertVisitors(req.body, (id) => {
    res.send({
      ...req.body,
      id,
    });
  });
};

//방명록 삭제하기 delete
exports.deleteVisitor = (req, res) => {
  //console.log(req.params);
  Visitor.delVisitor(req.params.id, (result) => {
    res.send({ result: result });
  });
};

//방명록 하나 조회하기 (수정하기 위해 id값 조회)
exports.getVisitorById = (req, res) => {
  Visitor.getVisitorById(req.params.id, (result) => {
    console.log("컨트롤러 방명록 하나조회 getVisitorById: ", result);
    res.send(result);
  });
};

//방명록 수정하기
exports.patchVisitor = (req, res) => {
  console.log("방명록 수정하기 패치", req.body);

  Visitor.patchVisitor(req.body, (result) => {
    console.log("컨트롤러 방명록 수정하기 patchVisitor", result);
    res.send({ result: true });
  });
};
