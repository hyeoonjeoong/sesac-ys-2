const add = (a, b) => a + b;
const minus = (a, b) => a - b;
const PI = 3.14;

//이거는
// module.exports = add
//이거랑 같은걸로 보면 된다.
// export default add

//--------------------------------
//1)하나만 내보낼 경우
// export default add;

//2)여러개 내보낼 경우 (default 꼭 안적어도 된다.)
export { add, minus };

//es6문법에서 모듈을 import할 때 , 구조분해 없이 식별자를 만들어서
//받아오려면 defult로 export하는 값이 있어야한다.
//즉 default 작성하고 내보내줘야 한다.
export default PI;
export { add, minus };
