const mysql = require("mysql");

//어떤 database에 연결을 할거냐
//createConnection 는 mysql연결정보를 받아서 mysql과 연결
//db 연결한다면 필요한 것 : host, user, password, database 이름
//conn 에는 내가연결한 데이터가 들어있는것. 이 객체로 sql문을 날릴 수 있다.

//근데 클라이언트는 root라는 계정으로 데이터에 접근할 수 없다.

const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "qowlwl223!",
  database: "sesac_test",
});

//콜백함수로 설계
//데이터가 조회되고 난 다음에 실행시킬 무언가가 있어야한다.
exports.getVisitors = (cb) => {
  conn.query(`SELECT * FROM visitor`, (err, rows) => {
    //err변수가 빈 값이 아니라면 err가 발생했다는 것!
    //throw 에러 자체를 던진다는것.throw만나면 함수 실행안된다.
    if (err) {
      throw err;
    }
    console.log("visitor", rows);
    cb(rows);
  });
};

//db연결했으니 얘는 필요없ㅇ므.
// exports.getVisitors = () => {
//   return [
//     { id: 1, username: "홍길동", comment: "내가 왔다." },
//     { id: 2, username: "이찬혁", comment: "으라차차." },
//   ];
// };

exports.insertVisitor = (data, cb) => {
  // insert into visitor (username, comment) values ('????', '?????')
  const sql = `insert into visitor (username, comment) values ('${data.username}', '${data.comment}')`;

  conn.query(sql, (err, result) => {
    // err 변수가 빈 값이 아니라면, err가 발생했다는 것.
    if (err) {
      throw err;
    }

    console.log("visitor insert", result);
    cb(result.insertId);
  });
};

//sql문 사용할 때 어떤 데이터가 필요할까
//삭제할 아이디가 필요
exports.delVisitor = (id, cb) => {
  const sql = `delete from visitor where id = ${id}`;

  conn.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    console.log("visitor delete", result);
    cb();
  });
};
