import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Task from "./Task";

describe("Task testing", () => {
  it("should render proper title", () => {
    render(<Task title="Example Title" date="Due Today, 2:00 PM" />);
    const task = screen.getByText("example title", { exact: false });
    expect(task).toBeInTheDocument();
  });
  it("should render proper date", () => {
    render(<Task title="Example Title" date="Due Today, 2:00 PM" />);
    const task = screen.getByText("Due Today, 2:00 PM", { exact: false });
    expect(task).toBeInTheDocument();
  });
});
