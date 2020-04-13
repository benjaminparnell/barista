import * as React from "react";
import { BrewType } from "../types";

interface Props {
  onSelected: (type: BrewType) => void;
}

const TYPES: BrewType[] = ["V60", "Aeropress"];

const TypeSelector: React.SFC<Props> = ({ onSelected }) => (
  <div>
    {TYPES.map((type) => (
      <div key={type} data-testid="type" onClick={() => onSelected(type)}>
        {type}
      </div>
    ))}
  </div>
);
export default TypeSelector;
