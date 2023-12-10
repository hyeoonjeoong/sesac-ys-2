import { Component } from "react";

//클래스형 컴포넌트 이벤트에서는 this를 사용해야 함수를 찾아 갈 수 있다.
// 이 때 1)함수 선언문을 사용하거나 2)함수 표현식을 사용할 수 있다.
// 단 함수 선언문 사용 시에는 생성자 내부에서 this를 바인딩해줘야 한다.
class EventClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "hello",
    };

    //---1) 함수선언문에서의 this 바인딩 작업
    //메소드 내부에서 class의 this를 사용하고 싶을 경우 bind를 해줘야한다. 생성자 내에서 this 객체를  직접 bind 해주는 작업을 거쳐야한다.
    //그래야 handleOnClick 내부에서 클래스를 가리키고 있는 this를 사용할 수 있다. 해당 this를 사용하라고 알려주는 것.
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  //---1) 함수선언문 (동적 바인딩)
  //함수가 사용될 때 this를 결정짓는다.
  handleOnClick() {
    this.setState({ msg: "bye" });
  }

  //---2) 함수 표현식 (정적 바인딩)
  //함수가 선언될 때 this를 결정짓는다. 함수를 선언하는 코드를 읽을 때 this가 결정되는 것.
  handleOnClickHello = () => {
    this.setState({ msg: "hello" });
  };

  render() {
    return (
      <>
        <h3>클래스형 컴포넌트 event handling🦖 공부</h3>

        {this.state.msg}
        <button onClick={this.handleOnClick}>잘가</button>
        <button onClick={this.handleOnClickHello}>안녕</button>

        {/* event는 리액트의 합성 이벤트 객체이다. 합성이벤트에 대한 모든 정보를 담고있다.
        그 중에 target이라는 거에 접근을 하면, 이벤트가 걸린 태그를 확인할 수 있음.
        이벤트의 type도 확인 가능 */}
        <button
          onClick={(event) => {
            console.log(event.target);
            console.log(event.type);
          }}
        >
          test
        </button>
      </>
    );
  }
}

export default EventClass;
