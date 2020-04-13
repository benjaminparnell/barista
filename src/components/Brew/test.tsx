import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import { recipes } from "../../RecipeService";
import Brew from ".";

describe("Brew", () => {
  it("should render a message if the recipe is not found", () => {
    const { getByText } = render(<Brew recipeId="100" />);
    expect(() => getByText("Recipe not found")).not.toThrow();
  });

  it("should render the start screen", () => {
    const { getByText } = render(<Brew recipeId="1" />);
    expect(() => getByText("Start")).not.toThrow();
  });

  it("should render the first step of the recipe when start is clicked", () => {
    const { getByText } = render(<Brew recipeId="1" />);
    fireEvent.click(getByText("Start"));
    expect(() => getByText("Pour 100g water")).not.toThrow();
  });

  it("should render a message when the recipe is finished", () => {
    const { getByText } = render(<Brew recipeId="1" />);
    fireEvent.click(getByText("Start"));
    recipes[0].steps.forEach((step) => {
      fireEvent.click(getByText(step.text));
    });
    expect(() => getByText("Enjoy")).not.toThrow();
  });
});
