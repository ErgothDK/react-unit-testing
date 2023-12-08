import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders a custom text in Greeting component", ($textToFind = "Hello World!") => {
    render(<Greeting />);
    const elementFound = screen.getByText($textToFind, { exact: true });
    expect(elementFound).toBeInTheDocument();
  });

  test("renders initial custom text when button is NOT clicked and DOES NOT render text changed", ($initialText = "Is great to see you!", $textChanged = "The text was changed") => {
    render(<Greeting />);

    const initialElementFound = screen.getByText($initialText, { exact: true });
    expect(initialElementFound).toBeInTheDocument();

    const changedElementFound = screen.queryByText($textChanged, {
      exact: true,
    });
    expect(changedElementFound).toBeNull();
  });

  test("changes custom text when button IS clicked?", ($initialText = "Is great to see you!", $textChanged = "The text was changed") => {
    render(<Greeting />);

    const initialElementFound = screen.getByText($initialText, {
      exact: true,
    });
    expect(initialElementFound).toBeInTheDocument();

    const button = screen.getByRole("button");
    userEvent.click(button);

    const elementFound = screen.getByText($textChanged, { exact: true });
    expect(elementFound).toBeInTheDocument();

    const initialElementAfterClickFound = screen.queryByText($initialText, {
      exact: true,
    });
    expect(initialElementAfterClickFound).toBeNull();
  });
});
