import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text={showAdd ? "close" : "Add"} onClick={onAdd} />
    </header>
  );
};
// const HeadingSty = {
//   color: "red",
//   backgroundColor: "black"
// };

Header.defaultProps = {
  title: "task tracker"
};

Header.PropType = {
  title: PropTypes.string
};

export default Header;
