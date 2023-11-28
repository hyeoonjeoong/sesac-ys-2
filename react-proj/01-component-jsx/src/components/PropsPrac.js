//props실습

// import PropTypes from "prop-types";

// function PropsPrac({ food }) {
//   return (
//     <>
//       <div>
//         내가 좋아하는 음식은
//         <div className="food_font">{food}</div>
//       </div>
//     </>
//   );
// }

// PropsPrac.defaultProps = {
//   food: "치킨",
// };

// PropsPrac.propTypes = {
//   food: PropTypes.string,
// };

// export default PropsPrac;

function PropsPrac({ title, author, price, type }) {
  return (
    <>
      <div className="bookContainer">
        <h2>이번주 베스트셀러</h2>
        {title}
        <br />
        <img src="/logo192.png" />
        <br />
        저자: {author}
        <br />
        판매가: {price}
        <br />
        구분: {type}
        <br />
      </div>
    </>
  );
}

//안넘어오더라도 디폴트로 넘어오도록
// FunPropsEx.defaultProps = {
//   title: "코딩온",
// };

// FunPropsEx.propTypes = {
//   title: PropTypes.string,
//   //필수로 문자열로 넘어와야한다.
//   content: PropTypes.string.isRequired,
//   number: PropTypes.number,
// };

export default PropsPrac;
