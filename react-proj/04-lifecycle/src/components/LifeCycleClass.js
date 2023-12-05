import { Component } from "react";

class LifeCycleClass extends Component {
  state = { text: "" };

  //1. 컴포넌트가 마운트 될 때 실행. 메소드 이름 틀리면 안된다. 알아서 실행된다.
  componentDidMount() {
    console.log("class Component : ⭕ mount");
  }

  //2.컴포넌트가 업데이트 될 때 실행
  componentDidUpdate(prevProps, prevState) {
    console.log("class Component : ✅ update");

    //text state가 변경될 때 마다 if문 안에 있는 코드를 실행시킨다
    if (prevState.text != this.state.text) {
      console.log("class Component : ✅✅ text update");
    }
  }

  //3. 컴포넌트가 unmount 될 때
  componentWillUnmount() {
    console.log("class Component : ❌ unmount");
  }

  render() {
    return (
      <>
        <h2>클래스형 컴포넌트 LifeCycle 공부</h2>
        <div>number : {this.props.number}</div>
        <input
          type="text"
          value={this.state.text}
          onChange={(e) => {
            this.setState({ text: e.target.value });
          }}
        />
      </>
    );
  }
}

export default LifeCycleClass;
