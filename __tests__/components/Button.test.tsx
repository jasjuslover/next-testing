import Button from "@/components/Button";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

const mockFn = jest.fn();

describe("Button", () => {
  it("render Button", () => {
    const { queryByRole } = render(<Button text="Submit" onClick={() => {}} />);

    expect(queryByRole("button")).toBeInTheDocument();
  });

  it("test click Button", () => {
    render(<Button text="Submit" onClick={mockFn} />);

    fireEvent.click(screen.getByText("Submit"));

    expect(mockFn).toHaveBeenCalled();
  });
});
