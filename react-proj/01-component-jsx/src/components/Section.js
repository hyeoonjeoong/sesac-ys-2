import PropTypes from "prop-types";

function Section({ title, children }) {
  return (
    <>
      <div className="Section__section">
        <h3 className="Section__title">{title}</h3>
        {/* children은 시작태그와 종료태그 사이에 온다 */}
        <div>{children}</div>
      </div>
    </>
  );
}

Section.prototype = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
