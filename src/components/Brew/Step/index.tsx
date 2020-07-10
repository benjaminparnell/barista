import React from "react";

const styles = require("../index.css");

interface Props {
  text: string;
  onClick?: () => void;
}

const Step: React.SFC<Props> = ({ text, onClick, children }) => (
  <div className={styles.container} onClick={onClick}>
    <p className={styles.step}>{text}</p>
    {children}
  </div>
);

export default Step;
