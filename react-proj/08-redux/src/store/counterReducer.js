//----------------------------------액션(Action)을 식별하기 위한 정의를 해준다.
//다른 reducer에서 동일한 이름의 action을 사용하면 충돌 할 수 있다.
//다른 reduce에 있는 액션과 겹치지 않기 위해 어느 파일에 있는 INCREMENT를 사용해야할 지 알려주는 걸로 생각.

//rootReducer를 아래처럼 작성해놓았다. 여기서의 현재 파일인 counterReducer의 key값은 counter이다.
//counter(counterReducer파일)에서 정의한 action인 INCREMENT를 사용하겠다는 것.

// const rootReducer = combineReducers({
//   counter: counterReducer,
//   isData: isDataReducer,
// });

//---액션(Action)을 식별하기 위한 정의 (문자열로 정의한 것)
const INCREMENT = "counter/INCREMENT";
const DECREMENT = "counter/DECREMENT";

//----------------------------------액션(Action)을 만들어내는 함수. 액션 객체를 반환한다.
//아래는 발생할 수 있는 action 자체를 return하는 (생성하는) 함수이다.
//increase 함수를 호출하면 Redux 애플리케이션 내에서 INCREMENT 타입의 액션을 발생시키게 되는 것.
//---왜 사용하냐면?
//액션 type의 이름이 바뀐다고 가정하면, 액션을 발생시키는(dispatch를 사용하는) 모든 곳에서 type을 다 바꿔줘야 하기 때문.
//---결국 action실행에 대한 부분을 함수로 뺀 것. (상수로 선언)
export const increase = () => ({ type: INCREMENT });
export const decrease = () => ({ type: DECREMENT });

//---초기값 설정
const initialValue = { number: 200 };

const counterReducer = (state = initialValue, action) => {
  switch (action.type) {
    //일반 문자열로 ""내부의 action type과 일치하면 액션을 동작시킨다. (상수 선언 전)
    case "INCREMENT":
    //상수로 선언 후 를 사용 한 것. //export const increase = () => ({ type: INCREMENT });
    case INCREMENT:
      return { number: state.number + 1 };
    case "DECREMENT":
    case DECREMENT:
      return { number: state.number - 1 };
    default:
      return state;
  }
};

export default counterReducer;

//---변수 let
//변수는 값을 여러 번 할당하고 변경할 수 있습니다. 한 번 정의된 변수는 다른 값으로 여러 차례 업데이트될 수 있습니다.
//값이 자주 변경되어야 하는 상황에서 사용
//---상수 const
//상수는 한 번 값을 할당하면 그 값을 변경할 수 없습니다. 한 번 정의된 값은 그대로 유지됩니다.
//상수는 선언할 때 반드시 초기화되어야 하며, 이후에는 값을 변경할 수 없습니다.
//값이 변하지 않아야 하는 고정된 상황에서 사용
