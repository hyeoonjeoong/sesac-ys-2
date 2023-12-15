//----------------------------------ver3. redux 구조화 + container 컴포넌트 폴더 /presentational 컴포넌트

//컨테이너 컴포넌트(Container Component)를 정의.
//Redux 상태와 액션을 연결하고 하위 프리젠테이셔널 컴포넌트들을 관리.

import { useSelector, useDispatch } from "react-redux";
import { Box1, Box2, Box4 } from "../components/Boxes";
import { increase, decrease } from "../store/counterReducer";

//AppRedux3에서는 아래 <Box1Container/>만 불러온다.
export function Box1Container() {
  const number = useSelector((state) => state.counter.number);
  return <Box1 number={number} />;
}

export function Box2Container() {
  const number = useSelector((state) => state.counter.number);
  return <Box2 number={number} />;
}
export function Box4Container() {
  const number = useSelector((state) => state.counter.number);
  const isData = useSelector((state) => state.isData);
  const dispatch = useDispatch();
  const counterIncrease = () => dispatch(increase());
  const counterDecrease = () => dispatch(decrease());
  const isDataChange = () => dispatch({ type: "CHANGE" });

  return (
    <Box4
      number={number}
      isData={isData}
      counterIncrease={counterIncrease}
      counterDecrease={counterDecrease}
      isDataChange={isDataChange}
    />
  );
}
