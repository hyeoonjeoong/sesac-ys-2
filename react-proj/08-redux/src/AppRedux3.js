//----------------------------------ver3. redux 구조화 + container 컴포넌트 폴더 /presentational 컴포넌트

import "./App.css";

import { Box1Container } from "./containers/BoxesContainer";

//---containers폴더
//redux store에 직접적으로 접근하는 컴포넌트를 모아두기 위해서.
//containers폴더는 리덕스에 접근할 수 있는 컴포넌트를 모아둔다.

//---components 폴더
//보통 presentational 컴포넌트만 저장
//redux store에 직접적으로 접근하지 않는다. 개별적으로 작동하는 ui같은 것들.

function AppRedux3() {
  return (
    <div>
      <h3>
        redux 구조화 + container 컴포넌트 폴더 /presentational 컴포넌트 폴더
        분리
      </h3>

      <Box1Container />
    </div>
  );
}

export default AppRedux3;
