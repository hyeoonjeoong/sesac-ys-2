//--------------------------------
//1)하나만 내보낼 경우
import add2 from "./math_es6.js";
//이(math_se6) 파일에서 default로 export 하고 있는 식별자를
//add2라는 식별자로 받아오겠다는 의미.
console.log(add2(2, 3));

//2)여러개 내보낼 경우
import { add } from "./math_es6.js";
console.log(add2(2, 3));

//es6문법에서 모듈을 import할 때 , 구조분해 없이 식별자를 만들어서
//받아오는 방법은
import math from "./math_es6.js";
//객체구조분해 없이 식별자이름만 써놓을 수 있는 문법은
//export default가 있어야한다.]
//구조분해없이 가져오려면 디폴트 작성해서 내보내기!
console.log(math);
