// 4.

//---(7)프레젠테이션(Presentation) 컴포넌트 작성 (상태, 액션)
//스토어의 상태를 표시하고, 액션을 발생시키는 프레젠테이션 컴포넌트를 작성한다.

import { useState } from "react";
const Bank = ({ money, onDeposit, onWithdraw }) => {
  const [input, setInput] = useState("");

  //사용자가 입력한 금액이 payload로 전달.
  //이 액션 객체가 reducer함수로 전달되어 redux 스토어 상태를 업데이트.

  //"onDeposit"은 Redux의 액션을 디스패치하는 역할
  //dispatch로 넘어왔다. "onDeposit"이라는 props로.
  //dispatch는 액션을 발생시키는 함수.
  //dispatch(action)과 같은 형태로 액션 객체를 파라미터로 넣어서 호출
  //"onDeposit"(input). 여기에 input값을 담는다.
  //input은 return값에 있는 value={input}
  //즉 사용자가 입력한 금액이 "onDeposit"에 담기게 되고 payload로 전달.
  const plus = () => {
    onDeposit(Number(input));
    setInput("");
  };

  const minus = () => {
    onWithdraw(Number(input));
    setInput("");
  };

  //---(1)프레젠테이션(Presentation) 컴포넌트 작성 (UI 구조)
  //UI의 구조를 먼저 정의하
  //이벤트 핸들링 및 상태 관리를 위한 코드를 작성.
  //컴포넌트의 외형과 동작을 먼저 결정!
  return (
    <>
      <h1>코딩온 은행</h1>
      <h2>잔액 : {money}원</h2>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={plus}>입금</button>
      <button onClick={minus}>출금</button>
    </>
  );
};

export default Bank;

// 1.
//-> store > bankReducer.js
