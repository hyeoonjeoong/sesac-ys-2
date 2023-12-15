//----------------------------------ver0. props drilling 예시
// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

//----------------------------------ver1. redux 적용
// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import AppRedux1 from "./AppRedux1";

// import { Provider } from "react-redux";
// import { configureStore } from "@reduxjs/toolkit";
// import { composeWithDevTools } from "redux-devtools-extension";

// //---초기값 설정
// const initialValue = { number: 100 };
// //state : {number:100}

// //---state를 바꿀 수 있는 함수 정의
// //reducer는 첫번째 매개변수로 현재 상태값 state를 받는다. 두번째 매개변수로는 action을 받는다.
// //이 내부에서 switch문을 통해서 action.type 에 따라 state에 각각의 변화를 일으킨다.
// const reducer = (state = initialValue, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return { number: state.number + 1 };
//     case "DECREMENT":
//       return { number: state.number - 1 };
//     default:
//       return state;
//   }
// };

// //---store 정의
// //configureStore는 함수이다. store만들 때 필요하다. 다른 컴포넌트에서 사용할 수 있도록.
// //이 store를 전역으로 쓸 수 있도록 넘겨줄 수 있게 된다.
// //reducer로 reducer를 쓰겠다.
// const store = configureStore({ reducer: reducer }, composeWithDevTools());

//---Provider
//Provider는 우리의 App이 Redux store에 접근할 수 있도록 해준다.
//상단에서 불러오고 불러올 파일을 감싸준다.
//원래 최상단의 app.js를 불러오지만 redux예시를 위해 AppRedux1.js 파일을 불러오자.

//감싸진 부분들에서 Redux를 사용할 수 있게된다.
//그리고 props로 store 자체가 전달된다. 전역에서 사용될 수 있도록.
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <Provider store={store}>
//     <AppRedux1 />
//   </Provider>
// );

//----------------------------------ver2. redux 구조화
// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import AppRedux2 from "./AppRedux2";

// //---얘네는 동일하게 불러온다.
// import { Provider } from "react-redux";
// import { configureStore } from "@reduxjs/toolkit";
// import { composeWithDevTools } from "redux-devtools-extension";

// //---store디렉토리에서 rootReducer를 불러와서 사용한다.
// //Redux에서의 모든 reducer를 결합 한 것.
// //reducer는 store에 보내진 action에 대해 어떻게 상태를 변화시키는지 지정하는 함수이다.
// import rootReducer from "./store";

// //reducer로 rootReducer를 쓰겠다.
// const store = configureStore({ reducer: rootReducer }, composeWithDevTools());
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <Provider store={store}>
//     <AppRedux2 />
//   </Provider>
// );

//----------------------------------ver3. redux 구조화 + container 컴포넌트 폴더 /presentational 컴포넌트
//containers폴더를 만들어준다.
//containers폴더는 리덕스에 접근할 수 있는 컴포넌트를 모아두는 곳.
//presentational폴더에는 ul적인 부분들을 모아둔다.

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import AppRedux3 from "./AppRedux3";

// import { Provider } from "react-redux";
// import { configureStore } from "@reduxjs/toolkit";
// import { composeWithDevTools } from "redux-devtools-extension";

// import rootReducer from "./store";

// const store = configureStore({ reducer: rootReducer }, composeWithDevTools());
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <Provider store={store}>
//     <AppRedux3 />
//   </Provider>
// );

//----------------------------------실습

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import BankRedux from "./BankRedux";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./store";

const store = configureStore({ reducer: rootReducer }, composeWithDevTools());
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BankRedux />
  </Provider>
);
