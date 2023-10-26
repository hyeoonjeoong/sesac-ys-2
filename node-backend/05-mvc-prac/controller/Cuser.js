const User = require("../model/User");
// User = { getUesr: () => {} }

//----- 경로와 연결 될 함수 내용을 정의
// 경로와 연결되는 함수니까 req,res객체 사용 가능
exports.main = (req, res) => {
  res.render("index");
};

exports.login = (req, res) => {
  // const id = "jeong";
  // const pw = "12345";
  const userData = User.getUser();
  //   userData = {id: "jeong", pw: "12345"}
  let data;
  if (req.body.userid == userData.id && req.body.password == userData.pw) {
    data = {
      isSuccess: true,
      msg: "로그인 성공!",
    };
  } else {
    data = {
      isSuccess: false,
      msg: "로그인 실패!",
    };
  }
  // console.log(req.body);
  res.send(data);
};
