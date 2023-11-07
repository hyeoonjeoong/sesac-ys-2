//설치해주어야 한다. npm i crypto
const crypto = require("crypto");

//hash암호화된 pw를 생성하는 함수를 만들어보자
//매개변수로 pw받아오자.
function createHashedPw(pw) {
  return crypto.createHash("sha512").update(pw).digest("base64");
}

console.log("pw: 1234 콘솔", createHashedPw("1234"));
console.log("pw: 1236 콘솔", createHashedPw("1236"));

//사용자가 입력한 비밀번호를 암호화를 해서 db에 넣어둔다.
//이 값이 db에 저장되어있다고 가정하자.
const input = "1234";
const db_Pw =
  "1ARVn2Auq2/WAqx2gNrL+q3RNjAzXpUfCXrzkA6d4Xa22yhRLy4AC50E+6UTPoscbo31nbOoq51gvkuXzJ6B2w==";

//이런식으로 비밀번호를 비교하게 된다.
console.log("createHashedPw 같은 값인지 콘솔", createHashedPw(input) == db_Pw);

const dbPwSalt =
  "XMfobxN0Y+xHAATzehfnHS/8qSq7zBHQURAU99NiKSqXi0nn/QYx4GcQd8POBG+zBu3bLWpeBFctSiVVNa8U5g==";
console.log(
  "createHashedPwWithSalt 같은 값인지 콘솔",
  createHashedPwWithSalt(input) == dbPwSalt
);
//그래서 salt값도 db에 저장해줘야한다. 함수가 실행되면서 salt는 계속 랜덤으로 바뀌기 때문.

//만약 a, b가 둘 다 같은 비밀번호를 사용한다면? 암호화도 똑같이 된다.
//a의 비밀번호가 유출되면 b도 유출되는 것.
//그래서 이 때 또 임의의 랜덤한 값을 뿌려주면서 그 값을 같이 암호화 한다.
//비밀번호가 같더라도 암호화 값을 뿌려주는건 다르다. 이걸 소금을 뿌려준다고 한다.

//pbkdf2Sync()에는 다섯 개의 인자가 들어간다.
//--1. 암호화된 문자열
//--2. salt
//--3. 반복 횟수
//--5. 키의 길이
//--5. 알고리즘
function createHashedPwWithSalt(pw) {
  const salt = crypto.randomBytes(16).toString("base64"); //16바이트로 만들고 문자열로 만들기. 계속 랜덤값이 만들어지는거.
  console.log("salt 만들어지나 콘솔", salt);
  const iterations = 100; //반복획수
  const keylen = 64; //생성할 키의 길이
  const digest = "sha512";
  return crypto
    .pbkdf2Sync(pw, salt, iterations, keylen, digest)
    .toString("base64");
}
console.log("pw 1234 salt 콘솔: ", createHashedPwWithSalt("1234"));

function comparePw(pw, salt) {
  const iterations = 100;
  const keylen = 64;
  const digest = "sha512";
  return crypto
    .pbkdf2Sync(pw, salt, iterations, keylen, digest)
    .toString("base64");
}

const dbPwSalt2 =
  "XMfobxN0Y+xHAATzehfnHS/8qSq7zBHQURAU99NiKSqXi0nn/QYx4GcQd8POBG+zBu3bLWpeBFctSiVVNa8U5g==";
const dbSalt = "sKuKdfaUiPEMmNTI8vxBUA==";
console.log(
  "comparePw 같은 값인지 콘솔",
  comparePw(input, dbSalt) == dbPwSalt2
);
