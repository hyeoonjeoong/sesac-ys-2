const express = require("express");
const multer = require("multer"); // multer 불러오기
const path = require("path"); //내장 모듈이다. 경로를 쉽게 구하기 위한.

const app = express();
const PORT = 8000;

// 클라이언트가 uploads 폴더에 저장한 이미지파일에 접근할 수 있도록, 미들웨어 작성
app.use("/uploads", express.static(__dirname + "/uploads"));

const upload = multer({
  dest: "uploads/",
});

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination: function (req, file, done) {
      done(null, "uploads/");
    },
    filename: function (req, file, done) {
      console.log("uploadDetail filename", req.body);
      console.log(file); // file.originalname : 미니언.webp
      const ext = path.extname(file.originalname); // .webp
      const basename = path.basename(file.originalname, ext); // 미니언
      const fileName = basename + "_" + Date.now() + ext; // 미니언_123453156.webp

      done(null, fileName);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB 제한
});

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.render("index_pra");
});

app.post("/upload", upload.single("userfile"), function (req, res) {
  console.log("file:", req.file);
  console.log("body:", req.body);
  // console.log("id:", req.body.form.id.value);
  res.render("result_pra", {
    src: req.file.path,
    id: req.body.id,
    pw: req.body.pw,
    name: req.body.name,
    age: req.body.age,
  });

  res.send("파일 업로드");
});

//----------------------비동기http통신 ( 동적 폼 전송) axios
app.post(
  "/upload/dynamic",
  uploadDetail.single("userfile"),
  function (req, res) {
    //응답으로 잘 나오는지보려고 보낸거.
    res.send({
      ...req.body,
      src: req.file.path,
    });
  }
);

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
