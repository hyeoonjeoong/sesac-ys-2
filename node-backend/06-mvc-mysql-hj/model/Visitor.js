const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "qowlwl223!",
  database: "sesac_test",
});

//전체 방명록 목록 가져오기
//얘는 콜백함수로 형태를 설계를 해 준 것이다. (cb)들어와야 실행되도록.
//다른 함수가 매개변수로 들어오면서 불러져서 getVisitors함수가 실행되게 된다.
//그래서 cb(rows)로 형태를 만들어준것이다. rows값이 들어와야 한다는 것이 아니다.
//다른 곳에서 getVisitors(hi) 이런식으로 함수를 호출하게 되면 hi가 rows로 들어가게 되고
//값이 불려져와 들어가게 됨으로써 getVisitors가 실행되게 되는 것.
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
