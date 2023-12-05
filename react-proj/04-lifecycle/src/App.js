import { useState } from "react";
import "./App.css";
import LifeCycle from "./components/LifeCycleFunc";
import LifeCycleClass from "./components/LifeCycleClass";
import LifeCyclePrac from "./components/LifeCyclePrac";

function App() {
  const [number, setNumber] = useState(0);
  const [isShow, setIsShow] = useState(true);

  return (
    <div>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        plus!
      </button>
      <button
        onClick={() => {
          setIsShow(!isShow);
        }}
      >
        {isShow ? "OFF" : "ON"}
      </button>
      {/* isShow가 true일 경우 뒤에꺼 실행 */}
      {/* {isShow && <LifeCycle number={number} />} */}

      {/* {isShow && <LifeCycleClass number={number} />} */}

      <br />
      <h3>life cycle 실습</h3>
      <LifeCyclePrac />
    </div>
  );
}

export default App;
