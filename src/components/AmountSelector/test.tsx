import React from "react";
import { render, fireEvent } from "@testing-library/react";
import AmountSelector from ".";

describe("Amount Selector", () => {
  it("should render a set of amounts to be selected", () => {
    const { queryAllByTestId } = render(
      <AmountSelector onSelected={jest.fn()} />
    );
    expect(queryAllByTestId("amount").length).toBe(3);
  });

  it("should call onSelected when an amount is selected", () => {
    const onSelectedSpy = jest.fn();
    const { getByText } = render(<AmountSelector onSelected={onSelectedSpy} />);
    fireEvent.click(getByText("2 cups"));
    expect(onSelectedSpy).toHaveBeenCalledWith(2);
  });

  it("should pluralize cup when the amount is greater than 1", () => {
    const onSelectedSpy = jest.fn();
    const { getByText } = render(<AmountSelector onSelected={onSelectedSpy} />);
    expect(() => getByText("1 cup")).not.toThrow();
    expect(() => getByText("2 cups")).not.toThrow();
    expect(() => getByText("3 cups")).not.toThrow();
  });
});
