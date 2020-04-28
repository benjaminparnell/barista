export enum Step {
  SelectBrewType,
  SelectRecipe,
  SelectAmount,
  Brew,
}

export type BrewType = "V60" | "Aeropress";

export type RecipeStep = {
  text: string | ((cupAmount: number) => string);
  seconds?: number;
};
export type Recipe = {
  id: string;
  name: string;
  brewType: BrewType;
  steps: RecipeStep[];
};
