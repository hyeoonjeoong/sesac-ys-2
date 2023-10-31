const { Visitor } = require("../model");

exports.home = (req, res) => {
  res.render("index");
};

//get / visitors => 기존 방명록 전체 조회 후 render("visitor.ejs")
exports.visitor = (req, res) => {
  //select * from visitor; 이거랑 같은게된다.
  //findAll 결과값은 배열이 된다.
  Visitor.findAll().then((result) => {
    console.log("findAll result ", result);
    console.log("0번 index의 username", result[0].dataValues.username); //dataValues는 생략해도된다. 시퀄라이저 문법이 그렇다.
    //기대한 배열 : [{id: , username: , comment: },{id: , username: , comment: }]
    res.render("visitor", { data: result });
  });
};

// POST /visitor => 방명록 insert
exports.postVisitor = async (req, res) => {
  //등록할 데이터의 정보를 넘겨준다.
  //여기서 key는 컬럼정보. 내맘대로 쓰는거 아니다.
  const data = {
    username: req.body.username,
    comment: req.body.comment,
  };
  //   Visitor.create(data)
  //   .then((result) => {
  //     console.log("create result ", result);
  //     res.send(result);
  //   });
  //   .catch((err)=> {
  //     console.log(err);
  //     res.status(500).send("오류발생")
  //   })
  const createVisitor = await Visitor.create(data).catch((err) => {});
  res.send(createVisitor);
};

// DELETE /visitor/:id => 방명록 삭제
exports.deleteVisitor = (req, res) => {
  Visitor.destroy({
    where: {
      id: req.params.id,
    },
  }).then((result) => {
    console.log("destroy result: ", result);
    res.send({ result: true });
  });
};

// GET /visitor/:id => 방명록 하나 조회
exports.getVisitorById = (req, res) => {
  //select * from visitor where id = ??? limit 1
  //조건을 걸거면. 그 조건은 객체 안에 넣는다. 객체 안에 where라는 키를 지정하는것.
  Visitor.findOne({
    where: {
      id: req.params.id,
    },
  }).then((result) => {
    console.log("fidnOne result: ", result);
    res.send(result);
  });
};

// PATCH /visitor/:id => 방명록 수정
exports.patchVisitor = (req, res) => {
  //update() 는 두가지가 들어간다. 어떻게 업데이트할거냐와 조건이 들어간다.
  const data = {
    username: req.body.username,
    comment: req.body.comment,
  };
  //update visitor set username = "???", comment = "" where id= ?
  Visitor.update(data, {
    where: {
      id: req.body.id,
    },
  }).then((result) => {
    console.log("update result: ", result);
    res.send({ result: true });
  });
};

// http://localhost:8000/visitor/test/10
//이걸로 접속이 가능하다. 실제 존재하는 아이디값이여야 한다.
exports.getTest = (req, res) => {
  //select * from visitor where id = 10 limit 1 order by username ASC
  //limit1 =findOne
  //만약 다 조회 필요없고 특정한 속성 username만 필요하다면? attributes 사용. 배열로 입력해주면 된다.
  //order 는 앞에는 어떤 속성의 order를 걸건지. 뒤에는 dec이런거 작성.
  //order는 조건이 여러개 걸릴 수 있어서 배열 안에 배열로 넣어줘야 한다.
  Visitor.findAll({
    attributes: ["username", "id"],
    // where: {
    //   id: req.params.id,
    // },
    order: [["username", "ASC"]], //username으로 오름차순 정렬
  }).then((result) => {
    console.log("fidnOne result: ", result);
    res.send(result);
  });
};
