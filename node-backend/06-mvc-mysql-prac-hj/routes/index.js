const express = require("express");
const user = require("../controller/Cuser");
const router = express.Router();
//메인페이지
router.get("/", user.index);
//회원가입
router.get("/signup", user.signup); //회원가입
// router.post("/signup", user.post_signup); //회원가입 버튼 클릭

//로그인
router.get("/login", user.login); //로그인 페이지
// router.post("/login", user.post_login); //로그인 버튼 클릭

// //내 정보(프로필 페이지)
// router.post("/profile", user.profile); //프로필 페이지 렌더
// router.patch("/profile/edit/:id", user.profile_edit); //정보 수정 버튼 클릭
// router.delete("/profile/delete/:id", user.profile_delete); //회원 탈퇴 버튼 클릭

module.exports = router;
