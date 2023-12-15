//----------------------------------ver1. redux 적용

import "./App.css";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
//최상단 index.js 파일에서 아래처럼 초기값 정의와 store 정의를 했다.
//const initialValue = { number: 100 };
//const reducer = (state = initialValue, action) => { ...
//const store = configureStore({ reducer: reducer }, composeWithDevTools());

//---useSelector
//store에 저장해 둔 상태를 불러올 수 있다.

//---useDispatch
//액션을 발생시킨다. (Action을 발생시키는 dispatch 함수를 실행하는 hook 함수)
//dispatch(action)과 같은 형태로 액션 객체를 파라미터로 넣어서 호출한다.

function AppRedux1() {
  return (
    <div>
      <Box1 />
    </div>
  );
}

function Box1() {
  const number = useSelector((state) => state.number);

  return (
    <div className="box">
      <h3>number: {number}</h3>
      <Box2 />
    </div>
  );
}
function Box2() {
  const number = useSelector((state) => state.number);

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
  const number = useSelector((state) => state.number);
  const dispatch = useDispatch(); //여기서 dispatch가 action을 발생시킨다.
  return (
    <div className="box">
      <h3>number: {number}</h3>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>plus</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>minus</button>
      {/* 여기서 발생하는 action은 reducer에 정의해놓았다. 

      const reducer = (state = initialValue, action) => {
      switch (action.type) {
        case "INCREMENT":
          return { number: state.number + 1 };
        case "DECREMENT":
          return { number: state.number - 1 };
        default:
          return state;
  }
}; */}
    </div>
  );
}

export default AppRedux1;
