import React from "react";

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
      >
        <h2>{amount} {amount > 1 ? "cups" : "cup"}</h2>
      </div>
    ))}
  </div>
);

export default AmountSelector;
