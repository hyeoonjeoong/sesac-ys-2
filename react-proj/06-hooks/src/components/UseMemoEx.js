import { useMemo, useState } from "react";

//---useMemo : state나 props가 변경될 때 마다 컴포넌트는 렌더링 된다. 이 때 바뀐 state도 있고 아닌 것도 있을 거다.
//하나만 바뀌면 되는데 전체가 다 다시 렌더링되는건 비효율적! 이 때 사용한다.
//불필요한 연산을 방지해주는 훅이다. 의존성배열을 등록해 해당 변수가 바뀌었을 때 연산하도록 해준다.

export default function UseMemoEx() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  // const [list, setList] = useState([]);

  //---[before]
  //count변수가 변경되지 않아도 렌더링 될 때 마다 다시 연산을 한다. 비효율적이다.
  //count가 변경될 때만 연산을 하도록 하고 싶다. useMemo를 사용하자.
  //   const calc = () => {
  //     console.log("calc.....✅");
  //     return count * 2;
  //   };

  //---[after]
  //useMemo(콜백함수, 의존성 배열)
  //기본 형식 const functionName = useMemo(callback, dependency)
  //불필요한 연산을 방지, 값을 기억을 한다.
  //calc 함수 자체는 count의 변경이 있을 때 만 다시 연산하여 calc에 담아둔다.
  //[count]는 useState로 배열로 반환되기 때문에 배열 형태로 넣어주면 된다.
  const calc = useMemo(() => {
    console.log("calc.....✅");
    return count * 2;
  }, [count]);

  return (
    <>
      <h3>useMemo 공부</h3>
      <div>
        const: {count}
        <button onClick={() => setCount(count + 1)}> + 1 </button>
      </div>
      {/* useMemo 안쓴거 */}
      {/* <div>calc : {calc()} </div> */}
      {/* useMemo 사용 */}
      <div>calc : {calc} </div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
}
