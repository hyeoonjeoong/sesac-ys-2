const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "qowlwl223!",
  database: "sesac_test",
});

//전체 방명록 목록 가져오기
exports.getVisitors = (cb) => {
  conn.query(`SELECT * FROM visitor`, (err, rows) => {
    // err 변수가 빈 값이 아니라면, err가 발생했다는 것.
    if (err) {
      throw err;
    }

    console.log("visitor", rows);
    cb(rows);
  });
};

//방명록 작성하기 insert
exports.insertVisitors = (data, cb) => {
  const sql = `insert into visitor (username, comment) values('${data.username}', '${data.comment}')`;
  conn.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    console.log("모델 visitor insert", result);
    cb(result.insertId);
  });
};

//방명록 삭제하기 delete
exports.delVisitor = (id, cb) => {
  const sql = `delete from visitor where id = ${id}`;
  conn.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    console.log("모델 visitor delete", result);
    cb(true);
  });
};

//방명록 하나 조회하기 (수정하기 위해 id값 조회)
exports.getVisitorById = (id, cb) => {
  conn.query(`select * from visitor where id=${"id"}`, (err, rows) => {
    if (err) {
      throw err;
    }
    console.log("모델 Visitor,js", rows);
    cb(rows[0]);
  });
};

//방명록 수정하기
exports.patchVisitor = (data, cb) => {
  const sql = `UPDATE visitor SET username='${data.username}', comment='${data.comment}' WHERE id=${data.id}`;
  conn.query(sql, (err, result) => {
    if (err) {
      throw err;
    }

    console.log("Visitor.js: ", result);
    cb(result);
  });
};
