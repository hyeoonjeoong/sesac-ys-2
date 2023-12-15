//----------------------------------ver3. redux 구조화 + container 컴포넌트 폴더 /presentational 컴포넌트

import "./App.css";
import { BankContainer } from "./containers/BankContainer";

function BankRedux() {
  return (
    <div>
      <h3>실습</h3>
      <BankContainer />
    </div>
  );
}

export default BankRedux;
