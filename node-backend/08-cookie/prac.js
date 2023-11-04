const express = require("express");
const app = express();
const PORT = 8000;
const cookieParser = require("cookie-parser");

app.set("view engine", "ejs");

app.use(cookieParser()); //쿠키를 해석하고 사용할 수 있게 해줌

const cookieConfig = {
  httpOnly: true,
  maxAge: 24 * 60 * 60 * 1000,
};

app.get("/", (req, res) => {
  const noPopup = req.cookies.popup;
  res.render("prac", { noPopup });
});

app.post("/setCookie", function (req, res) {
  res.cookie("popup", "y", cookieConfig);
  res.send({ result: true });
});

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
