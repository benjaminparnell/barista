import React from "react";
import PropTypes from "prop-types";

const styles = require("../index.css");

interface Props {
  text: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Step: React.FC<Props> = ({ text, onClick, children }) => (
  <div
    className={styles.container}
    onClick={onClick}
    onKeyDown={onClick}
    role="button"
    tabIndex={-1}
  >
    <p className={styles.step}>{text}</p>
    {children}
  </div>
);

Step.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

Step.defaultProps = {
  onClick: () => {},
  children: null,
};

export default Step;
