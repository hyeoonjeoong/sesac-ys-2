//함수형 컴포넌트 이렇게 작성해도되고 아래처럼 작성해도된다. 동일.
// const FunComponent = () => {
//   return <div>Funtional Component 입니다</div>;
// };

import image from "./react-logo.png";

function FunComponent() {
  const text = "hello?";
  const name = "richard";

  const ifRenderTest = () => {
    if (name === "lily") {
      return <b>안녕하세요!</b>;
    } else if (name === "richard") {
      return "안녕하세요...";
    } else {
      return "누구세요";
    }
  };

  const style = { fontSize: "20px", color: "blue" };

  return (
    <>
      {/*1. 하나의 태그로 감싸서 return*/}
      <div>함수형 컴포넌트 입니다1</div>
      <div>함수형 컴포넌트 입니다2</div>

      {/*2. js문법 사용 가능하다.(변수) 중괄호안에 넣어야 한다.*/}
      <h3>코딩온 {text}</h3>

      {/*2. js문법 사용 가능하다.(삼항 연산자를 조건에 따른 렌더링. 간단한것만 가능 )*/}
      <h4>{name === "lily" ? "안녕하세요!" : "누구세요?"}</h4>

      {/*2-1 복잡한 조건을 이용하고 싶다면? 위에서 함수로 만들어 사용*/}
      <h4>{ifRenderTest()}</h4>

      {/*2-2 조건에 따른 렌더링 (논리연산자 && - 앞에꺼가 참일경우에만 뒤에꺼 읽는다.)*/}
      <h5>{name === "richard" && "안녕하세요!"}</h5>

      {/*3 inline style 적용 방법 - style속성값으로 객체를 넣어서 전달한다. 결국 js객체를 전달하겠다는거. 그니까 중괄호 두개*/}
      {/*하이픈을 빼고 대문자로 바꾼다고 생각. key와 value가 오기때문에 따옴표로 묶어준다. 문자열이 아니니까!*/}
      <div style={{ fontSize: "20px", color: "red" }}>hello</div>
      <div style={style}>hello</div>

      {/*class와 onclik을 js에서 사용하기*/}
      {/* <div class="" onclick="함수()"> 원래 html에서는 이러케 했다. </div> */}
      <div className="test-css">jsx에서 css 사용하기(className)</div>

      {/* html에서는 함수를 호출, jsx에서는 함수를 선언한다! */}
      {/* 버튼 클릭과 무관하게 자동으로 실행되게 된다. 리액트는 가상돔으로 계속 실행시키기 때문에. 그래서 선언을 해줘야한다. */}
      <button
        onClick={() => {
          //이러케함수실행();
          console.log("버튼클릭 hello");
        }}
      >
        버튼
      </button>

      {/* 5. 종료태그 필수! */}
      <br />
      {/* 경로 작성 시 최상위 경로가 public폴더 안! 그래서 그냥 /로 시작. */}
      <img src="/logo192.png" />
      {/* src내부에 있는 이미지를 사용할 때.(react-logo.png) 위에서 이미지 import해서 가져와서 사용할수도 있다.  */}
      <img src={image} />
    </>
  );
}
export default FunComponent;
