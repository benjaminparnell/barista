import React from "react";

interface Props {
  onSelected: (amount: number) => void;
}

const AmountSelector: React.SFC<Props> = ({ onSelected }) => (
  <div>
    {[1, 2, 3].map((amount) => (
      <div key={amount} onClick={() => onSelected(amount)} data-testid="amount">
        {amount} {amount > 1 ? "cups" : "cup"}
      </div>
    ))}
  </div>
);

export default AmountSelector;
