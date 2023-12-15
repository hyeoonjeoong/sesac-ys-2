//----------------------------------ver3. redux 구조화 + container 컴포넌트 폴더 /presentational 컴포넌트

//프리젠테이셔널 컴포넌트(Presentational Component)를 정의한다.
//Redux 상태를 직접 사용하지 않고, 상위 컴포넌트로부터 전달된 number 값을 렌더링.

import { Box2Container, Box4Container } from "../containers/BoxesContainer";

export function Box1({ number }) {
  return (
    <div className="box">
      <h3>number: {number}</h3>
      <Box2Container />
    </div>
  );
}
export function Box2({ number }) {
  return (
    <div className="box">
      <h3>number: {number}</h3>
      <Box3 />
    </div>
  );
}
export function Box3() {
  return (
    <div className="box">
      <Box4Container />
    </div>
  );
}
export function Box4(props) {
  const { number, isData, counterIncrease, counterDecrease, isDataChange } =
    props;
  return (
    <div className="box">
      <h3>number: {number}</h3>
      <button onClick={counterIncrease}>plus</button>
      <button onClick={counterDecrease}>minus</button>

      <div>isData {`${isData}`}</div>
      <button onClick={isDataChange}>변경</button>
    </div>
  );
}
