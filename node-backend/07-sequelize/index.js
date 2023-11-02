const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.json());
// app.use("/static", express.static(__dirname + "/static"))
app.use(express.urlencoded({ extended: true }));

//라우터에서 작성한거 불러오기
const router = require("./routes");
app.use("/", router);

app.get("*", function (req, res) {
  res.render("404");
});

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
