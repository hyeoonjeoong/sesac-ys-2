import { Component, useState } from "react";
import "./HandlerExPrac.css";

// class HandlerExPrac extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       msg: "Hello World!",
//     };
//   }

//   handleOnClick = () => {
//     this.setState({ msg: "Goodbye World!" });
//   };

//   render() {
//     return (
//       <>
//         <h3>실습1</h3>
//         {this.state.msg}
//         <button onClick={this.handleOnClick}>클릭</button>
//       </>
//     );
//   }
// }

// function HandlerExPrac() {
//   const [color, SetColor] = useState("black");
//   const [msg, SetMsg] = useState("검정색글씨");

//   const changeRed = (event) => {
//     SetColor("Red");
//     SetMsg("빨간색글씨");
//   };
//   const changeBlue = (event) => {
//     SetColor("Blue");
//     SetMsg("파란색글씨");
//   };

//   return (
//     <>
//       <h3>실습2</h3>
//       <div style={{ color: color }}>{msg}</div>
//       <button onClick={changeRed}>빨간색으로</button>
//       <button onClick={changeBlue}>파란색으로</button>
//     </>
//   );
// }

// function HandlerExPrac() {
//   const [msg, setMsgLook] = useState("");

//   const lookMsg = () => {
//     setMsgLook("보여라");
//   };
//   const hidekMsg = () => {
//     setMsgLook("");
//   };

//   return (
//     <>
//       <h3>실습3</h3>
//       {msg}
//       <button onClick={hidekMsg}>사라져라</button>
//       <button onClick={lookMsg}>보여라</button>
//     </>
//   );
// }

function HandlerExPrac() {
  const [text, setText] = useState("");
  const [fonColor, setFonColor] = useState("");
  const addText = (event) => {
    return text;
  };

  const changeColor = (event) => {
    setFonColor(event.target.value);
  };

  return (
    <>
      <div className="go-center">
        <h3>실습4</h3>
        과일:
        <select name="fruits">
          <option value="">복숭아</option>
          <option value="">바나나</option>
        </select>
        배경색:
        <select name="fruits">
          <option value="">파란색</option>
          <option value="">빨간색</option>
        </select>
        글자색:
        <select name="fruits" onChange={changeColor}>
          <option value="black">검정색</option>
          <option value="yellow">노란색</option>
        </select>
        <br />
        <br />
        내용:{" "}
        <input
          type="text"
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
          onKeyDown={addText}
        />
        <div
          style={{
            color: fonColor,
            backgroundColor: "black",
            width: "150px",
            height: "30px",
          }}
        >
          {text}
        </div>
      </div>
    </>
  );
}
export default HandlerExPrac;
