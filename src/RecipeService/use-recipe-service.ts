import { useRef } from "react";
import RecipeService from ".";

const useRecipeService = (): RecipeService => {
  const reference = useRef(new RecipeService());
  return reference.current;
};

export default useRecipeService;
