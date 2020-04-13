import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import TypeSelector from ".";

describe("TypeSelector", () => {
  it("should render the correct number of types", () => {
    const { queryAllByTestId } = render(<TypeSelector onSelected={() => {}} />);
    expect(queryAllByTestId("type").length).toBe(2);
  });

  it("should call onSelected with the selected type when a type is clicked", () => {
    const onSelected = jest.fn();
    const { getByText } = render(<TypeSelector onSelected={onSelected} />);
    fireEvent.click(getByText("Aeropress"));
    expect(onSelected).toHaveBeenCalledWith("Aeropress");
  });
});
