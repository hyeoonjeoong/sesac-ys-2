const User = require("../model/User");

exports.index = (req, res) => {
  res.render("index");
};

exports.signup = (req, res) => {
  res.render("signup");
};
// exports.post_signup = (req, res) => {
//   User.post_signup(req.body, function () {
//     res.send({ result: true });
//   });
// };

exports.login = (req, res) => {
  res.render("login");
};
