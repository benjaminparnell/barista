import React from "react";
import PropTypes from "prop-types";

const styles = require("./index.css");

interface Props {
  onSelected: (amount: number) => void;
}

const AmountSelector: React.SFC<Props> = ({ onSelected }) => (
  <div className={styles.container}>
    {[1, 2, 3].map((amount) => (
      <div
        className={styles.amount}
        key={amount}
        onClick={() => onSelected(amount)}
        data-testid="amount"
        role="button"
        tabIndex={-1}
        onKeyDown={() => onSelected(amount)}
      >
        <h2>
          {amount} {amount > 1 ? "cups" : "cup"}
        </h2>
      </div>
    ))}
  </div>
);

AmountSelector.propTypes = {
  onSelected: PropTypes.func.isRequired,
};

export default AmountSelector;
