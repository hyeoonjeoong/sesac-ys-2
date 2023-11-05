const express = require("express");
const user = require("../controller/Cuser");
const router = express.Router();

router.get("/", user.index); //index 렌더

router.get("/signup", user.signup); //회원가입 페이지를 렌더
router.post("/signup", user.post_signup); //회원가입 버튼 클릭 시

router.get("/signin", user.signin); //로그인 페이지를 렌더
router.post("/signin", user.post_signin); //로그인 버튼 클릭 시

router.post("/profile", user.profile); //프로필 페이지를 렌더 (임시. 일반 post 전송. 왜냐? 로그인을 유지시킬 수 있는 기술을 모른다.)
router.patch("/profile/edit/:id", user.profile_edit); //회원정보 수정버튼 클릭시
router.delete("/profile/delete/:id", user.profile_delete); //회원 탈퇴 버튼 클릭 시

module.exports = router;
