import { useState } from "react";

function EventFunc() {
  const [msg, setMsg] = useState("hello");

  const handleOnClick = () => {
    setMsg("bye");
  };

  function handleOnClickHello() {
    setMsg("hello");
  }

  const handleOnClickTest = (message) => {
    setMsg(message);
  };

  const [name, setName] = useState("");

  const handleEnter = (e) => {
    if (e.key == "Enter") {
      console.log("엔터가 눌렸습니다.");
    }
  };

  return (
    <>
      <h3>함수형 컴포넌트 event handling🦖 공부</h3>
      <div>
        {msg}
        <button onClick={handleOnClick}>잘가</button>
        <button onClick={handleOnClickHello}>안녕</button>

        {/* 함수에서 매개변수를 받고 싶으면 어떻게 해야하나 */}
        {/* 첫번째 방법. onClick에서 익명함수를 선언하고, 그 내부에서 함수를 실행시킨다. */}
        {/* <button
          onClick={() => {
            handleOnClickTest("안녕?");
          }}
        >
          테스트
        </button> */}

        {/* 두번째 방법. bind를 이용한다. */}
        {/* bind의 첫번째 인자(매개변수)는 .앞에있는 함수(handleOnClickTest)의 this를 결정한다. */}
        {/* 첫번째는 이미 기능이 정해져있다. 할 일이 있으니 넘겨줄값이 없다. 그래서 null로 둔다. */}
        {/* 두번째 인자로 원하는 값을 넘겨주면 된다. */}
        <button onClick={handleOnClickTest.bind(null, "안녕?")}>테스트</button>

        <br></br>
        {/* input태그에서 엔터를 누르면 "엔터를 눌렀습니다."라는 문구가 콘솔에 찍히도록 */}
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          onKeyDown={handleEnter}
        />
      </div>
    </>
  );
}

export default EventFunc;
