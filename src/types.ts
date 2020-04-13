export enum Step {
  SelectBrewType,
  SelectRecipe,
  Brew,
}
export type BrewType = "V60" | "Aeropress";
export type Recipe = {
  id: string;
  name: string;
  brewType: BrewType;
  steps: {
    text: string;
    seconds?: number;
  }[];
};
