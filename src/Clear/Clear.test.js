import { fireEvent, render, screen } from "@testing-library/react";
import Clear from "./Clear";

describe("Clear button", () => {
  const renderClearBtn = (props = {}) => {
    render(
      <Clear setSelectedNpsState={() => {}} setResults={() => {}} {...props} />
    );

    return {
      button: screen.getByRole("button", {
        name: "Clear state selection and results",
      }),
    };
  };

  it("renders with styling and aria-label", () => {
    const { button } = renderClearBtn();

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("clear-button");
  });

  it('sets selectedState to "" and sets results to null when clicked', () => {
    const mockSetSelectedState = jest.fn();
    const mockSetResults = jest.fn();

    const { button } = renderClearBtn({
      setSelectedNpsState: mockSetSelectedState,
      setResults: mockSetResults,
    });

    fireEvent.click(button);

    expect(mockSetSelectedState).toHaveBeenCalledWith("");
    expect(mockSetResults).toHaveBeenCalledWith(null);
  });
});
