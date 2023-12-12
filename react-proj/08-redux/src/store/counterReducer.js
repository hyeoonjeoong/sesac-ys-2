//어느 파일에 있는 INCREMENT를 사용해야할 지 알려줘야한다.
//다른 reduce에 있는 액션과 겹치지 않기 위해

const INCREMENT = "counter/INCREMENT";
const DECREMENT = "counter/DECREMENT";

//발생할 수 있는 action을 return하는 함수
//액션 type의 이름이 바뀐다고 가정하면,
//액션을 발생시키는(dispatch를 사용하는) 모든 곳에서 type을 다 바꿔줘야한다.
//이를 해결하기 위해 만듬.
export const increase = () => ({ type: INCREMENT });
export const decrease = () => ({ type: DECREMENT });

const initialValue = { number: 100 };

const counterReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "INCREMENT": //INCREMENT 상수 선언 전 ver.3
    case INCREMENT: //INCREMENT 상수 선언 후 ver.3-1
      return { number: state.number + 1 };
    case "DECREMENT":
    case DECREMENT:
      return { number: state.number - 1 };
    default:
      return state;
  }
};

export default counterReducer;
