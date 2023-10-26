const User = require("../model/User");
// User = { getUesr: () => {} }

exports.main = (req, res) => {
  res.render("index");
};

exports.login = (req, res) => {
  // const id = "lily";
  // const pw = "12345";
  const userData = User.getUser();
  //   userData = {id: "lily", pw: "12345"}
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
