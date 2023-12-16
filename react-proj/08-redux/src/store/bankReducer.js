//---(2) 액션(Action) 타입 정의
//액션 타입은 문자열 상수로 정의하며, 액션을 식별하는 역할을 한다.
const DEPOSIT = "bank/DEPOSIT";
const WITHDRAW = "bank/WITHDRAW";

//---(3)액션 생성자(Action Creator) 함수 작성
//액션 생성자 함수는 액션을 반환하는 함수이다.
export const deposit = () => ({ type: DEPOSIT });
export const withdraw = () => ({ type: WITHDRAW });

//---(4)초기 상태 정의
const initialState = 0;

//---(5)리듀서 함수 작성
//리듀서 함수는 현재 상태와 액션을 받아 새로운 상태를 반환하는 함수이다.
//첫 번째 매개변수로 현재 상태값(state), 두 번째 매개변수로 action을 받는다.
//이 내부에서 switch문을 통해서 action.type 에 따라 state에 각각의 변화를 일으킨다.

//Action은 컴포넌트에서 store에 넘겨 줄 데이터를 의미한다.
//Action은 하나의 객체로 표현,`**reducers` 가 수행할 작업을 설명한다. (실행하라는 명령어로 생각)
const bankReducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case DEPOSIT: // 입금
      return state + payload;
    case WITHDRAW: // 출금
      return state - payload;
    default:
      return state;
  }
};

export default bankReducer;

// 2.
//-> containers > BankContainer.js

//---------------------Redux 작성 순서
//프레젠테이션 컴포넌트 작성 - components
//액션 타입 정의 - store
//액션 생성자 함수 작성 - store
//초기 상태 정의 - store
//리듀서 함수 작성 - store
//컨테이너 컴포넌트 작성 - containers
//프레젠테이션 컴포넌트 작성 - components

//---------------------payload?
//보통 액션 객체에 데이터를 담을 때 사용되는 일반적인 이름 (관례)
//기본적으로 payload는 액션 객체에 필요한 데이터를 담아 전달하기 위한 용도로 사용.
//payload 대신에 data, value, 또는 특정한 의미를 가진 단어를 사용해도 된다.
