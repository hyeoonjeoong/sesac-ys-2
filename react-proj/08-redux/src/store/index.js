//rootReducer 정의

//----------------------------------ver2. redux 구조화

//---combineReducers
//여러개의 reducer를 하나로 합쳐준다. 합쳐서 하나의 큰 상태 트리를 만든다.
import { combineReducers } from "redux";

//---각각의 reducer를 가져온다.
//reducer는 상태를 어떻게 변경할지를 정의하는 함수.
import counterReducer from "./counterReducer";
import isDataReducer from "./isDataReducer";
import bankReducer from "./bankReducer";

//---reducer를 합칠 때는 각각의 reducer에 접근하기 위한 key가 필요하다.
//접근할 때 사용하기 위한 이름. 이름은 원하는대로 작성해주면 된다.
//counterReducer 라는 reducer에 접근하기 위한 이름은 counter로 지정.
const rootReducer = combineReducers({
  counter: counterReducer,
  isData: isDataReducer,
  money: bankReducer,
});

//---합쳐진 reducer를 외부에서 사용할 수 있도록 내보낸다.
export default rootReducer;
