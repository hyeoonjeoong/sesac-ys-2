const mysql = require("mysql");

const cnn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "qowlwl223!",
  database: "sesac_test",
});

//회원가입 버튼 클릭
exports.post_signup = (data, cb) => {
  let sql = `INSERT INTO user(userid, name, pw) VALUES('${data.userid}','${data.name}','${data.pw}');`;
  cnn.query(sql, function (err) {
    if (err) throw err;
    cb();
  });
};

exports.post_login = (data, cb) => {};
exports.get_user = (id, cb) => {};

exports.update_profile = (data, cb) => {};
exports.delete_user = (id, cb) => {};
