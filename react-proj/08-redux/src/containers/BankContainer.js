//---(6)컨테이너(Container) 컴포넌트 작성
//useSelector와 useDispatch를 사용하여 스토어의 상태를 가져오고,
//액션을 디스패치하는 컨테이너 컴포넌트를 작성합니다.
import { useSelector, useDispatch } from "react-redux";
import Bank from "../components/Bank";
//reducer에서 작성한 액션 생성자 함수 호출
import { deposit, withdraw } from "../store/bankReducer";

export const BankContainer = () => {
  const money = useSelector((state) => state.money);
  const dispatch = useDispatch();

  return (
    <>
      <Bank
        money={money}
        onDeposit={(payload) => dispatch({ ...deposit(), payload: payload })}
        onWithdraw={(payload) => dispatch({ ...withdraw(), payload: payload })}
        //deposit()로부터 만들어진 액션 객체의 기존 속성을 그대로 가져오면서 payload 속성을 추가한다.
        //얘는 "onWithdraw"라는 props로 전달되고 프레젠테이션에서 사용자가 입력한 금액이 payload에 담긴다.
        //어쨌든 디스패치하는 역할로 프레젠테이션으로 넘겨졌다.
        //디스패치한 액션은 루트 리듀서로 전달되고 리듀서에 의해 상태 등이 처리된다.(bankReducer)
      />
    </>
  );
};

//---Dispatch (디스패치)
//액션을 발생 시키는 함수
//dispatch(action)과 같은 형태로 액션 객체를 파라미터로 넣어서 호출

//useDispatch를 사용하여 액션을 디스패치한다.
//디스패치한 액션은 루트 리듀서로 전달되고, 각 리듀서에 의해 처리된다.

//이 코드에서 deposit()는 액션 생성자 함수이다. 얘를 호출해서 기존 액션 객체를 만들어냅니다.

//---{ ...deposit(), payload: payload }
//액션을 디스패치할 때 필요한 데이터를 payload로 전달하는 것!
//deposit()으로부터 생성된 객체의 속성을 펼쳐서 새로운 객체를 만듭니다.
//이후에 payload라는 속성을 추가하여 새로운 객체를 생성.
//즉, 이를 통해 deposit()로부터 만들어진 기존 액션 객체를 복사하면서
//동시에 payload 속성을 추가한 새로운 액션 객체를 생성한다.
//이렇게 하면 deposit()로부터 만들어진 액션 객체의 기존 속성을 그대로 가져오면서
//payload 속성을 추가해 새로운 액션 객체를 만들게 된다.

// 3.
//-> components > Bank.js
