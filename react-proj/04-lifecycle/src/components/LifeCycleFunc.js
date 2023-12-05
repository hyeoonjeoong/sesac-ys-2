import { useEffect, useState } from "react";

function LifeCycle(props) {
  const { number } = props;
  const [text, setText] = useState("");

  //---useEffect(콜백함수, 의존성 배열) . 배열에 뭘 넣느냐에 따라 앞의 함수가 언제 실행될지 다르게 동작된다. 넣어도 되고 안넣어도 된다.
  //❌✅

  //---1. 의존성 배열이 빈 배열일 때.
  //mount시에 콜밸함수 실행시킨다.
  //콜백함수 내부에서 return 뒤에 오는 함수를 unmount시에 실행시킨다.
  useEffect(() => {
    console.log("function Component : ⭕ mount");

    return () => {
      console.log("function Component : ❌ unmount");
    };
  }, []);

  //---2. 의존성 배열을 전달하지 않을 경우.
  //mount & update시에 콜백함수를 실행시킨다.
  useEffect(() => {
    console.log("function Component : ✅ update");
  });

  //---3. 의존성 배열에 원소가 존재할 경우.
  //해당 원소가 update 될 때 마다 콜백함수를 실행시킨다. (해당 원소가 변경될 때 마다)
  useEffect(() => {
    console.log("function Component : ✅✅ text update");
  }, [text]);

  return (
    <>
      <h2>함수형 컴포넌트 LifeCycle 공부</h2>
      <div>number : {number}</div>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </>
  );
}

export default LifeCycle;
