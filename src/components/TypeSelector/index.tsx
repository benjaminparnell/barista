import React from "react";
import PropTypes from "prop-types";
import { BrewType } from "../../types";

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
        role="button"
        tabIndex={-1}
        onKeyDown={() => onSelected(type)}
      >
        <p>{type}</p>
      </div>
    ))}
  </div>
);

TypeSelector.propTypes = {
  onSelected: PropTypes.func.isRequired,
};

export default TypeSelector;
