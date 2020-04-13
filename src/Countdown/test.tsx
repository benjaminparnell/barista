import React from "react";
import { render, act } from "@testing-library/react";
import Countdown from ".";

describe("Countdown", () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  const advanceBy = (ms: number) =>
    act(() => {
      jest.advanceTimersByTime(ms);
    });

  it("should countdown from the seconds passed to it to zero", () => {
    const { getByTestId } = render(<Countdown seconds={3} />);
    expect(getByTestId("countdown").textContent).toBe("3");
    ["2", "1", "1"].forEach((expectedText) => {
      advanceBy(1000);
      expect(getByTestId("countdown").textContent).toBe(expectedText);
    });
  });

  it("should call done when the countdown has finished if done is passed in", () => {
    const doneSpy = jest.fn();
    const { getByTestId } = render(<Countdown seconds={3} done={doneSpy} />);
    expect(getByTestId("countdown").textContent).toBe("3");
    ["2", "1", "1"].forEach(() => advanceBy(1000));
    advanceBy(1000);
    expect(doneSpy).toHaveBeenCalledTimes(1);
  });
});
