import * as React from "react";
import { render, fireEvent, getByText } from "@testing-library/react";
import { recipes } from "../../RecipeService";
import { RecipeStep } from "../../types";
import Brew from ".";

describe("Brew", () => {
  const cupAmount = 2;
  const getByStepText = (
    container: HTMLElement,
    step: RecipeStep,
    cupAmount: number
  ) => {
    return getByText(
      container,
      typeof step.text === "function" ? step.text(cupAmount) : step.text
    );
  };

  it("should render a message if the recipe is not found", () => {
    const { getByText } = render(<Brew recipeId="100" cupAmount={cupAmount} />);
    expect(() => getByText("Recipe not found")).not.toThrow();
  });

  it("should render the start screen", () => {
    const { getByText } = render(<Brew recipeId="1" cupAmount={cupAmount} />);
    expect(() => getByText("Start")).not.toThrow();
  });

  it("should render the first step of the recipe when start is clicked", () => {
    const { getByText } = render(<Brew recipeId="1" cupAmount={1} />);
    fireEvent.click(getByText("Start"));
    expect(() => getByText("Grind 15g of coffee")).not.toThrow();
  });

  it("should render a message when the recipe is finished", () => {
    const cupAmount = 2;
    const { container, getByText } = render(
      <Brew recipeId="1" cupAmount={cupAmount} />
    );
    fireEvent.click(getByText("Start"));
    recipes[0].steps.forEach((step) => {
      fireEvent.click(getByStepText(container, step, cupAmount));
    });
    expect(() => getByText("Enjoy")).not.toThrow();
  });

  it("should render a start over button when the recipe is finished", () => {
    const cupAmount = 2;
    const startOverSpy = jest.fn();
    const { container, getByText } = render(
      <Brew recipeId="1" onStartOver={startOverSpy} cupAmount={cupAmount} />
    );
    fireEvent.click(getByText("Start"));
    recipes[0].steps.forEach((step) => {
      fireEvent.click(getByStepText(container, step, cupAmount));
    });
    fireEvent.click(getByText("Start Over"));
    expect(startOverSpy).toHaveBeenCalled();
  });

  it("should modify the step text based on the cup amount", () => {
    const cupAmount = 2;
    const { getByText } = render(
      <Brew recipeId="1" onStartOver={jest.fn()} cupAmount={cupAmount} />
    );
    fireEvent.click(getByText("Start"));
    expect(() => getByText("Grind 30g of coffee")).not.toThrow();
  });
});
