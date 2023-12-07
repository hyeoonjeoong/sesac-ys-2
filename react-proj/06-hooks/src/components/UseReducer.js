import { useReducer, useState, useCallback } from "react";

const initialValue = { value: 0 };

//reducer는 매개변수 두개를 받는다. 1. 이전 state 2. 어떤 액션 할 지에 대한 정보
//액션에 따라 state값을 변경해준다. 조건을 걸어서.
const reducer = (prevState, action) => {
  switch (action.type) {
    case "PLUS":
      return { value: prevState.value + 1 };
    case "MINUS":
      return { value: prevState.value - 1 };
    case "RESET":
      return initialValue;
    case "MULTIFLY":
      return { value: prevState.value * action.number };
    case "DIVIDE":
      return { value: prevState.value / action.number };
    default:
      return { value: prevState.value };
  }
};

//state : 상태
//dispatch : 액션을 발생시키는 함수이다.
//reducer : 실질적으로 상태를 업데이트하는 함수가 된다. 상태업데이트는 dispatch 이용해서 업데이트가 되게 된다. 결국 dispatch가 실행시키는 함수가 reducer이다.
//왜 사용하나?

export default function UseReducer() {
  //---dispatch사용
  //dispatch는 reducer를 실행시킨다.
  const [state, dispatch] = useReducer(reducer, initialValue);
  const [number, setNumber] = useState(0);

  const handleChangeNumber = useCallback((e) => setNumber(e.target.value), []);

  const plus = () => dispatch({ type: "PLUS" });
  const minus = () => dispatch({ type: "MINUS" });
  const reset = () => dispatch({ type: "RESET" });
  const multifly = () => dispatch({ type: "MULTIFLY", number: number });
  const divide = () => dispatch({ type: "DIVIDE", number: number });

  //---state로 하게 되면?
  //만약에 곱하기 나누기 등 더 많은 연산을 이용한다고 하면? 또 컴포넌트 자체가 복잡해져서 코드가 길어진다면?
  //여기저기서 setState가 실행되고 호출된다.
  //코드 효율성을 위해 사용한다. 더 찾기 편해진다. reducer만 보면 되니까.
  //state의 변화를 추적하고 싶다면. 어떤 상황에 어떻게 state가 변하는가에 대해. setState를 일일이 찾아가면서 +1, -1이 되는구나~ 순차적으로 알 수 밖에 없다.
  //reducer 사용한다면? 이 함수만 읽으면 알 수 있어진다.  연산작업 자체를 한 곳에 몰아두는 것.

  //   const [state, setState] = useState(initialValue);
  //   const plus = ()=> setState({value : state.value + 1})
  //   const minus = ()=> setState({value : state.value - 1})
  //   const reset = ()=> setState(initialValue)
  //   }

  return (
    <>
      <h3>useReducer 공부</h3>
      <div>
        {state.value}
        <button onClick={plus}>+1</button>
        <button onClick={minus}>-1</button>
        <button onClick={reset}>reset</button>
        <br />
        <input type="number" value={number} onChange={handleChangeNumber} />
        <button onClick={multifly}>곱하기</button>
        <button onClick={divide}>나누기</button>
      </div>
    </>
  );
}
