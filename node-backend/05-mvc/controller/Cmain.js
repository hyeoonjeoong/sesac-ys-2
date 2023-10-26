const { commentInfos } = require("../model/Comment");

//얘를 가져오고
exports.main = (req, res) => {
  res.render("index");
};

//모델에서 입력한 데이터 불러오기
exports.comments = (req, res) => {
  const commentData = commentInfos();
  res.render("comments", {
    commentInfos: commentData,
  });
};
