const User = require("../model/User");

exports.index = (req, res) => {
  res.render("index");
};
exports.signup = (req, res) => {
  res.render("signup");
};
// exports.post_signup = (req, res) => {
//   //모델과 연결하여 uer테이블에 회원가입 정보 insert
//   //send({result:true})
// };

// exports.login = (req, res) => {
//   res.render("login");
// };
// exports.post_login = (req, res) => {};

// exports.profile = (req, res) => {};

// exports.profile_edit = (req, res) => {};

// exports.profile_delete = (req, res) => {};
