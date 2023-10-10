const add = (a, b) => a + b; //중괄호없으면 이거 바로리턴으로 하겠다는거.ㅣㅣ
//위아래 코드 똑같다.
// const add2 = (a,b) => {
//  return a+b;
// };

const minus = (a, b) => a - b;
const PI = 3.14;

//여러 식별자를 객체로 내보낼 때 case2, case3
module.exports = {
  add,
  minus,
  PI,
}; //모듈로 만들 함수 이렇게 작성한다.
//이렇게 해야 index.js에서 가져와서 쓸 수 있다.
//여기서 내보내지 않으면 다른파일에서 사용할 수 없다.

module.exports = {
  add: add,
  minus: minus,
  PI: PI,
};

//다르게 내보낼수도 있다. case1
//파일에서 한개의 식별자만 내보내는 경우
// module.exports = add;

//선언할때마다 내보낼수도 있다.
//만드는 순간에 내보내는거.
module.exports.add = (a, b) => a + b;
module.exports.minus = (a, b) => a - b;
module.exports.PI = 3.14;
