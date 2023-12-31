//--------------------------------------------------
//함수 작성--------------
//중괄호가 없으면 해당 값을 바로 return하겠다는 의미.
const add = (a, b) => a + b;
//위에 작성 된 코드는 아래랑 같은 의미이다.
const add2 = (a, b) => {
  return a + b;
};

//--------------------------------------------------
//case1--------------
//함수를 만들고 이거 하나만 내보내는 경우
const add = (a, b) => a + b;
module.exports = add;
//모듈로 만들 함수를 작성한다.
//그리고 module.exports를 해줘야 index.js에서 가져와서 쓸 수 있다.
//여기서 내보내지 않으면 다른파일에서 사용할 수 없다.

//--------------------------------------------------
//case2, case3--------------
//여러 식별자를 객체로 내보낼 때
//아래처럼 선언하고
const add = (a, b) => a + b;
const minus = (a, b) => a - b;
const PI = 3.14;
//이렇게 내보내기
module.exports = {
  add,
  minus,
  PI,
};
//결국 이러한 값이 내보내기가 되는 것
module.exports = {
  add: add,
  minus: minus,
  PI: PI,
};

//--------------------------------------------------
//선언과 동시에 내보내기--------------
module.exports.add = (a, b) => a + b;
module.exports.minus = (a, b) => a - b;
module.exports.PI = 3.14;
