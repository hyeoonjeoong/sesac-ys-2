//---props가져오기 1 - 매개변수 자체로 가져오기
// function FunPropsEx(props) {
//   return (
//     <>
//       <div>함수형 컴포넌트를 이용 (Props) </div>
//       <div>
//         제목은 {props.title}, 내용은 {props.content}
//       </div>
//     </>
//   );
// }

//---props가져오기 2- 컴포넌트 내에서 구조분해
// function FunPropsEx(props) {
//   const { title, content } = props;
//   return (
//     <>
//       <div>함수형 컴포넌트를 이용 (Props) </div>
//       <div>
//         제목은 {title}, 내용은 {content}
//       </div>
//     </>
//   );
// }

//---props가져오기 3-매개변수로 props를 받아올 때 부터 구조분해
//---실제로 넘어오는 속성값 이름을 사용해야한다.
// function FunPropsEx({ title, content }) {
//   return (
//     <>
//       <div>함수형 컴포넌트를 이용 (Props) </div>
//       <div>
//         제목은 {title}, 내용은 {content}
//       </div>
//     </>
//   );
// }

//---props가져오기 4-proptype를 이용해서 어떤 props가 넘어올지 명시
//예상과 다른 props가 넘어와도 오류 콘솔이 나지 않기 때문에 코드가 길어질수록 오류를 찾기 힘들 수 있다.
//유연한 js의 특징으로 인해 실행은 되더라도 예기치 못한 오류가 발생할 수 있다.
import PropTypes from "prop-types";

function FunPropsEx({ title, content, number }) {
  return (
    <>
      <div>함수형 컴포넌트를 이용 (Props) </div>
      <div>
        제목은 {title}, 내용은 {content}, 숫자는 {number}
      </div>
    </>
  );
}

//안넘어오더라도 디폴트로 넘어오도록
FunPropsEx.defaultProps = {
  title: "코딩온",
};

FunPropsEx.propTypes = {
  title: PropTypes.string,
  //필수로 문자열로 넘어와야한다.
  content: PropTypes.string.isRequired,
  number: PropTypes.number,
};

export default FunPropsEx;
