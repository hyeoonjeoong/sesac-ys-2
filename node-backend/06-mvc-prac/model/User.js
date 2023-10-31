const mysql = require("mysql");
const cnn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "qowlwl223!",
  database: "sesac_test",
});

exports.post_signup = (data, cb) => {
  //insert부분 작성
  const sql = `insert into user (userid, name, pw) values (`${data.userid}, ${data.name}, ${data.pw}`)`
};

exports.post_signin = (data, cb) => {};
exports.get_user = (id, cb) => {};

exports.update_profile = (data, cb) => {};
exports.delete_user = (id, cb) => {};
