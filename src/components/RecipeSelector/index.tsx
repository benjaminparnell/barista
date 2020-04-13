import * as React from "react";
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
          data-testid={`recipe-${recipe.id}`}
        >
          <h2>{recipe.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default RecipeSelector;
