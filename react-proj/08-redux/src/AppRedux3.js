import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "./store/counterReducer";
import { Box1Container } from "./containers/BoxesContainer";
import { Money } from "./containers/Money";

//---containers폴더
//redux store에 직접적으로 접근하는 컴포넌트를 모아두기 위해서

//---컴포넌트 폴더
//보통 presentational 컴포넌트만 저장
//redux store에 직접적으로 접근하지 않는다. 개별적으로 작동하는 ui같은 것들.

function AppRedux3() {
  return (
    <div>
      <Box1Container />
      <Money />
    </div>
  );
}

export default AppRedux3;
