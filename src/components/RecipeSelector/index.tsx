import React from "react";
import PropTypes from "prop-types";
import { BrewType } from "../../types";
import RecipeService from "../../RecipeService";

const styles = require("./index.css");

interface Props {
  brewType: BrewType;
  onSelected: (id: string) => void;
}

const RecipeSelector: React.SFC<Props> = ({ brewType, onSelected }) => {
  const recipeService = new RecipeService();
  const recipes = recipeService.getByBrewType(brewType);
  return (
    <div className={styles.container}>
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className={styles.recipe}
          onClick={() => onSelected(recipe.id)}
          onKeyDown={() => onSelected(recipe.id)}
          data-testid={`recipe-${recipe.id}`}
          role="button"
          tabIndex={-1}
        >
          <h2>{recipe.name}</h2>
        </div>
      ))}
    </div>
  );
};

RecipeSelector.propTypes = {
  brewType: PropTypes.oneOf(["Aeropress", "V60"] as const).isRequired,
  onSelected: PropTypes.func.isRequired,
};

export default RecipeSelector;
