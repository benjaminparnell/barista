import { useRef } from "react";
import RecipeService from ".";

const useRecipeService = () => {
  const ref = useRef(new RecipeService());
  return ref.current;
};

export default useRecipeService;
