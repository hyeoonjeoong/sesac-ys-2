//---ver1. props drilling 예시
// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(

//   <App />

// );

//---ver2. redux 적용
// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import AppRedux1 from "./AppRedux1";

// import { Provider } from "react-redux"; //Provider 불러오고 아래에서 감싸준다.
// import { configureStore } from "@reduxjs/toolkit"; //configureStore는 함수이다. store만들 때 필요. 다른 컴포넌트에서 사용할 수 있도록.
// import { composeWithDevTools } from "redux-devtools-extension";

// //초기값 설정
// const initialValue = { number: 100 };
// //state : {number:100}

// //state를 바꿀 수 있는 함수 정의
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

// const store = configureStore({ reducer: reducer }, composeWithDevTools()); //reducer로 reducer를 쓰겠다.
// //그럼 이 store를 전역으로 쓸 수 있도록 넘겨줄 수 있다.

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <Provider store={store}>
//     <AppRedux1 />
//   </Provider>
// );

//---ver3. redux 구조화
// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import AppRedux2 from "./AppRedux2";

// import { Provider } from "react-redux";
// import { configureStore } from "@reduxjs/toolkit";
// import { composeWithDevTools } from "redux-devtools-extension";

// import rootReducer from "./store";

// const store = configureStore({ reducer: rootReducer }, composeWithDevTools());
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <Provider store={store}>
//     <AppRedux2 />
//   </Provider>
// );

//---ver4. redux 구조화 + container 컴포넌트 폴더 /presentational 컴포넌트 폴더 분리
//container폴더는 리덕스에 접근할 수 있는 컴포넌트를 모아두는 폴더가 컨테이너
//ul적인 부분들을 모아두는 곳이 presentational폴더
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRedux3 from "./AppRedux3";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./store";

const store = configureStore({ reducer: rootReducer }, composeWithDevTools());
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <AppRedux3 />
  </Provider>
);
