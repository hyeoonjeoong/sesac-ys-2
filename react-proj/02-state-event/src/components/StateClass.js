import { Component } from "react";

class StateClass extends Component {
  //-----옛날 방식
  //생성자를 만드는 순간 component 에 있는 메소드를 호출해줘야한다.
  //   constructor(props) {
  //     super(props); //super()는 부모 클래스의 생성자. 얘를 실행시켜야 this객체 사용 가능.

  //     this.state = {
  //       number: 0,
  //       text: "hello",
  //     };
  //   }

  //-----만약 생성자를 구현하지 않으면, 기본 생성자가 알아서 자동으로 실행된다.
  // constructor(props){
  //     super(props)
  // }

  //-----최근방식
  state = {
    number: 0,
    text: "hello",
  };
  state = {
    number2: 0,
    number3: 0,
  };

  render() {
    return (
      <>
        <div>props예시 {this.props.name}</div>
        <h3>클래스형 컴포넌트 state 공부</h3>
        <div>
          number state value {this.state.number}
          <button
            onClick={() => {
              //state변경은 보통 일반 변수 변경하듯이 하는 것이 아니다. 값을 재할당 하는 것이 아니다.
              //state를 변경시키는 함수를 사용한다. 클래스형 컴포넌트는 setState 메소드가 제공된다.
              //this.setState({ number: this.state.number + 1 });
              //   this.setState({ number: this.state.number + 1 });

              //만약 setState를 연달아 2번 사용해야 할 때, 위 처럼 사용하면 원하는 결과를 얻을 수 없다.
              //State는 비동기로 실행되기 때문.

              this.setState((prevState) => {
                return { number: prevState.number + 1 };
              });
              this.setState((prevState) => {
                return { number: prevState.number + 1 };
              });
            }}
          >
            +2
          </button>
          <h3>클래스형 컴포넌트 state 실습</h3>
          <div>숫자 : {this.state.number2}</div>
          <button
            onClick={() => {
              this.setState((prevState2) => {
                return { number2: prevState2.number2 + 2 };
              });
            }}
          >
            +2
          </button>
          <div>숫자 : {this.state.number3}</div>
          <button
            onClick={() => {
              this.setState((prevState3) => {
                return { number3: prevState3.number3 - 1 };
              });
            }}
          >
            -1
          </button>
        </div>
      </>
    );
  }
}

export default StateClass;
