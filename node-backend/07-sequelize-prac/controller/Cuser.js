const User = require("../model/User");

exports.index = (req, res) => {
  res.render("index");
};

//회원가입 . insert부분
exports.signup = (req, res) => {
  res.render("signup");
};

//이걸 아래로해보자
exports.post_signup = (req, res) => {
  User.post_signup(req.body, function () {
    res.send({ result: true });
  });
};

//이거 수정해본거
exports.post_signup = async (req, res) => {
  const data = {
    username: req.body.username,
    comment: req.body.comment,
  };
  const createUser = await Visitor.create(data).catch((err) => {});
  res.send(createUser);
};

//----------------------------------------
exports.signin = (req, res) => {
  res.render("signin");
};
exports.post_signin = (req, res) => {
  User.post_signin(req.body, function (rows) {
    console.log(rows[0]);
    if (rows.length > 0) res.send({ result: true, id: rows[0].id });
    else res.send({ result: false });
  });
};

exports.profile = (req, res) => {
  User.get_user(req.body.id, function (result) {
    console.log("profile", result);
    if (result.length > 0) res.render("profile", { data: result[0] });
    else res.redirect("/user/signin");
  });
};

exports.profile_edit = (req, res) => {
  const data = {
    ...req.body,
    id: req.params.id,
  };
  User.update_profile(data, function () {
    res.send({ result: true });
  });
};

exports.profile_delete = (req, res) => {
  User.delete_user(req.params.id, function () {
    res.send({ result: true });
  });
};
