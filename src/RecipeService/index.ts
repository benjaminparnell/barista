import { BrewType, Recipe } from "../types";

export const recipes: Recipe[] = [
  {
    id: "1",
    brewType: "Aeropress",
    name: "World Champs 2019",
    steps: [
      {
        text: (cupAmount) => `Pour ${cupAmount * 100}g water`,
        seconds: 10,
      },
      { text: "Stir firmly 20 times", seconds: 10 },
      { text: "Put on filter cap and press out excess air", seconds: 20 },
      { text: "Press out coffee" },
      { text: "Add 100g water" },
      { text: "Taste and add more water until you reach desired strength" },
      { text: "Cool to 60 degrees" },
    ],
  },
  {
    id: "2",
    brewType: "Aeropress",
    name: "Classic",
    steps: [
      { text: "Pour to number 3 on chamber and stir", seconds: 30 },
      { text: "Fill to top", seconds: 45 },
      { text: "Add filter cap, invert and press" },
    ],
  },
];

interface IRecipeService {
  getByBrewType(brewType: BrewType): Recipe[];
  getById(id: string): Recipe | undefined;
}

class RecipeService implements IRecipeService {
  getByBrewType(brewType: BrewType): Recipe[] {
    return recipes.filter((recipe) => recipe.brewType === brewType);
  }

  getById(id: string): Recipe | undefined {
    return recipes.find((recipe) => recipe.id === id);
  }
}

export default RecipeService;
