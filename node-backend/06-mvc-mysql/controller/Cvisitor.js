const Visitor = require("../model/Visitor");

exports.home = (req, res) => {
  res.render("index");
};

exports.visitor = (req, res) => {
  //return값이 있으니까 렌더해서 가져와서 데이터를 담아놓은것.
  //   const data = Visitor.getVisitors();
  //   res.render("visitor", { data: data });

  //얘는 sql연결
  //이 함수는 결과값을 받아와야 한다. Visitors.js파일에서. 그리고 데이터로 넘겨주는것
  Visitor.getVisitors((rows) => {
    res.render("visitor", { data: rows });
  });
};

//-----post요청. /visitor => 방명록 insert
exports.postVisitor = (req, res) => {
  //insert한 데이터가 어디있는지 찾아야한다.
  //axios로 넘겨줬으니까
  console.log("req.body", req.body);
  Visitor.insertVisitor(req.body, (id) => {
    //model에 있는 코드를 불러와 연결
    console.log("Ctrl postVisitor", id);
    res.send({
      ...req.body,
      id,
    });
  });
};

//-----delete / visitor/:id => 방명록 삭제
exports.deleteVisitor = (req, res) => {
  console.log(req.params);
  Visitor.delVisitor(req.params.id, (result) => {
    res.send({ result: result });
  });
};
