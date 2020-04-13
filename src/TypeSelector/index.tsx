import * as React from "react";
import { BrewType } from "../types";
const styles = require("./index.css");

interface Props {
  onSelected: (type: BrewType) => void;
}

const TYPES: BrewType[] = ["V60", "Aeropress"];

const TypeSelector: React.SFC<Props> = ({ onSelected }) => (
  <div className={styles.container}>
    {TYPES.map((type) => (
      <div
        key={type}
        className={styles.type}
        data-testid="type"
        onClick={() => onSelected(type)}
      >
        <p>{type}</p>
      </div>
    ))}
  </div>
);

export default TypeSelector;
