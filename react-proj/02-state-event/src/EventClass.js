import { Component } from "react";

class EventClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "hello",
    };

    //함수 선언문을 사용하여 메소드를 만들 때
    //메소드 내부에서 class의 this를 사용하고 싶을 경우 bind를 해줘야한다. 생성자 내에서 this를 bind 해주는 작업을 거쳐야한다.
    //함수 선언문을 이용하여 선언된 메소드는 this객체를 직접 bind해줘야
    //handleonclick내부에서 클래스를 가리키고 있는 this를 사용할 수 있다.
    //함수 사용하면서 this를 바인딩해준것. 이 this를 사용하라고.
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  //---함수 선언문을 사용하여 메소드 정의
  //선언문은 자체적으로 this를 만들 고 사용할 수 있다.
  //이 this를 가공하지 않으면 사용못한다. 그래서 bind 필요.
  //함수 내부에서 자체적인 this를 만들 수 있고, this가 클래스의 this가 아니게 된다.
  //---해결법1. 생성자 내부에서 this를 원하는 것으로 바인딩해준다.
  //---해결법2. 함수 표현식을 사용한다.
  //함수 선언문은 동적바인딩을 하기 때문에 함수가 사용될 때 this가 결정된다.
  //-얘는 선언문. 동적바인딩이니까 .?
  handleOnClick() {
    this.setState({ msg: "bye" });
  }

  //함수 표현식 >정적바인딩
  //얘는 함수가 선언될 때 this를 결정짓는다. 함수를 선언하는 코드를 읽을 때 this가 결정되는 것.
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

        <button
          onClick={(event) => {
            //event는 리액트의 합성 이벤트 객체이다. 합성이벤트에 대한 모든 정보를 담고있다.
            //그 중에 target이라는 거에 접근을 하면, 이벤트가 걸린 태그를 확인할 수 있음.
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
