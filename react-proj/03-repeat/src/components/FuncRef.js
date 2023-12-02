//메소드 불러와야한다.

import { useRef } from "react";

function FunRef() {
  //어디에 담을건지 변수 담아야한다.]
  //input이라는 변수에 아래 input이 담기게 된다.
  const input = useRef();

  //useRef로컬변수로 사용하는 예시
  //얘는 state가 아니여서 값이 바뀐다고 해서 페이지가 렌더링되지는 않는다.
  const localVar = useRef(0);

  //input.current해야 담기게 된다.담긴 input에 focus가 들어간다.
  const focusInput = () => {
    input.current.focus();
  };

  //ref값은 current까지 해야 접근 가능
  const plusLocalVar = () => {
    localVar.current++;
    console.log(localVar.current);
  };

  return (
    <>
      {/* ref에 변수 이름 넣어준다. */}
      <input type="text" ref={input} />
      <button type="button" onClick={focusInput}>
        버튼
      </button>
      <div>{localVar.current}</div>
      <button type="button" onClick={plusLocalVar}>
        버튼
      </button>
    </>
  );
}

export default FunRef;
