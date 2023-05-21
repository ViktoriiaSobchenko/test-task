import PropTypes from "prop-types";
import css from "./Button.module.css";

function Button({ text, onClick }) {
  return (
    <button type="button" className={css.btn} onClick={onClick}>
      {text}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
