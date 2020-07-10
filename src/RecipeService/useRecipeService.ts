import { useRef } from "react";
import RecipeService from ".";

const useRecipeService = (): RecipeService => {
  const ref = useRef(new RecipeService());
  return ref.current;
};

export default useRecipeService;
