import PropTypes from "prop-types";
import { log } from "util";

const Button = ({ color, text, onClick }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      className="btn"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
Button.defaultProps = {
  color: "steelblue"
};
Button.PropType = {
  text: PropTypes.string,
  color: PropTypes.string,
  onclick: PropTypes.func
};
export default Button;
