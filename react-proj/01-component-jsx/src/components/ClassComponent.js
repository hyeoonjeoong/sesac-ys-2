import { Component } from "react"; //리액트 라이브러리에서 호출

//클래스는 속성과 메소드를 갖는다.
//render라는 메소드를 이용해서 함수에서의 return과 동일하게 적용시킨다.
class ClassComponent extends Component {
  render() {
    return <div>클래스형 컴포넌트입니다.</div>;
  }
}

export default ClassComponent;
