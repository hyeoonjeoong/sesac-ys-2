//----------------------------------ver2. redux 구조화

import "./App.css";
import { useDispatch, useSelector } from "react-redux";
//액션(Action)을 만들어내는 함수를 불러온 것.
import { increase, decrease } from "./store/counterReducer";

function AppRedux2() {
  return (
    <div>
      <Box1 />
    </div>
  );
}

function Box1() {
  //counter(counterReducer파일)에서 초기값을 작성했으니 state.counter.number로 작성.
  //counterReducer에 접근하기 위한 key값이 counter.
  const number = useSelector((state) => state.counter.number);
  return (
    <div className="box">
      <h3>ver2. redux 구조화</h3>
      <h3>number: {number}</h3>
      <Box2 />
    </div>
  );
}

function Box2() {
  const number = useSelector((state) => state.counter.number);
  return (
    <div className="box">
      <h3>number: {number}</h3>
      <Box3 />
    </div>
  );
}

function Box3() {
  return (
    <div className="box">
      <Box4 />
    </div>
  );
}

function Box4() {
  const number = useSelector((state) => state.counter.number);
  const isData = useSelector((state) => state.isData);
  const dispatch = useDispatch();
  return (
    <div className="box">
      <h3>number: {number}</h3>
      {/* 일반 문자열 사용 */}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>plus</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>minus</button>
      {/* 상수로 선언 후 사용. 함수로 뺀 부분 */}
      <button onClick={() => dispatch(increase())}>plus</button>
      <button onClick={() => dispatch(decrease())}>minus</button>

      <div>isData {`${isData}`}</div>
      <button onClick={() => dispatch({ type: "CHANGE" })}>변경</button>
    </div>
  );
}
export default AppRedux2;

//----------------------------------<div>isData {`${isData}`}</div>
//store > index.js에서 아래처럼 작성해놓았다.
//isData 이 key값을 사용해 접근 할 수 있다.
//isDataReducer에서 반한되는 값을 보여주기 위해 {`${isData}`} 형태로 가져온 것.
//isDataReducer는 "CHANGE"라는 action type에 따라 true나 false를 반환한다.

// const rootReducer = combineReducers({
//   counter: counterReducer,
//   isData: isDataReducer,
// });
