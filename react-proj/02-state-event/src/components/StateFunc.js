import { useState } from "react";

function StateFunc() {
  //useState는 배열을 반환한다. 그 배열을 구조분해해서 number와 setNumber선언.
  //첫번째거 - 변수를 return, 두번째거-함수를 return [state변수, state를 변경시키는 함수] = useState(state의 초기값)
  const [number, setNumber] = useState(0);
  const [number2, increase] = useState(0);
  const [number3, decrease] = useState(0);
  const [text, setText] = useState("hello");

  return (
    <>
      <h3>함수형 컴포넌트 state 공부</h3>
      <div>
        number state value {number} {""}
        <button
          onClick={() => {
            //얘도 비동기이기 때문에 처리가 필요하다. 아래처럼 하면 +2가 되지 않음.
            // setNumber(number + 1);
            // setNumber(number + 1);

            setNumber((prevNumber) => prevNumber + 1);
            setNumber((prevNumber) => prevNumber + 1);
          }}
        >
          +2
        </button>
      </div>

      <h3>함수형 컴포넌트 state 실습</h3>
      <div>
        숫자 : {number2}
        <button
          onClick={() => {
            increase((prevNumber2) => prevNumber2 + 1);
          }}
        >
          더하기 1
        </button>
        숫자 : {number3}
        <button
          onClick={() => {
            decrease((prevNumber3) => prevNumber3 - 2);
          }}
        >
          빼기 2
        </button>
      </div>
    </>
  );
}

export default StateFunc;
