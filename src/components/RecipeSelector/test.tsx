import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import RecipeSelector from ".";

describe("RecipeSelector", () => {
  it("should render the correct number of recipes for the brew type (Aeropress)", () => {
    const { queryAllByTestId } = render(
      <RecipeSelector brewType="Aeropress" onSelected={jest.fn()} />
    );
    expect(queryAllByTestId(/recipe/i).length).toBe(2);
  });

  it("should call onSelected with the id of the recipe when a recipe is selected", () => {
    const onSelected = jest.fn();
    const { getByTestId } = render(
      <RecipeSelector brewType="Aeropress" onSelected={onSelected} />
    );
    fireEvent.click(getByTestId("recipe-1"));
    expect(onSelected).toHaveBeenCalledWith("1");
  });
});
