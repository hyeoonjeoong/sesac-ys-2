const bcrypt = require("bcrypt");

const salt = 10;

function bcryptPw(pw) {
  return bcrypt.hashSync(pw, salt);
}
console.log("bcryptPw pw1234 콘솔 > ", bcryptPw("1234"));

function comparePw(pw, dbPw) {
  return bcrypt.compareSync(pw, dbPw);
}

const dbPw = bcryptPw("1234");
console.log("pw1234 콘솔 > ", dbPw);
console.log("comparePw 콘솔 > ", comparePw("1234", dbPw));
