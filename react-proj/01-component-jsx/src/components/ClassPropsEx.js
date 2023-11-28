import { Component } from "react";
import PropTypes from "prop-types";

//{this.props.title}는 Component안에서 사용. 얘로 인해서 작성되는?

class ClassPropsEx extends Component {
  render() {
    return (
      <>
        <div>클래스형 컴포넌트를 이용 (Props) </div>
        <div>
          제목은 {this.props.title}, 내용은 {this.props.content}, 숫자는 {""}
        </div>
      </>
    );
  }
}

ClassPropsEx.defaultProps = {
  title: "코딩온",
};

ClassPropsEx.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string.isRequired,
  number: PropTypes.number,
};

export default ClassPropsEx;
