import { shallow } from "enzyme";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Task from "./Task";

describe("Task testing", () => {
  it("should render Task component properly", () => {
    expect(
      shallow(
        <Task
          id="t1"
          status="test"
          title="Example Title"
          date="Due Today, 2:00 PM"
          pinnedNote={{ blocks: [], id: "n1", date: 123, views: 1 }}
        />
      )
    ).toMatchSnapshot();
  });
  it("should render proper title", () => {
    render(
      <Task
        id="t2"
        status="test"
        title="Example Title"
        date="Due Today, 2:00 PM"
        pinnedNote={{ blocks: [], id: "n2", date: 123, views: 1 }}
      />
    );
    const task = screen.getByText("example title", { exact: false });
    expect(task).toBeInTheDocument();
  });
  it("should render proper date", () => {
    render(
      <Task
        id="t3"
        status="test"
        title="Example Title"
        date="Due Today, 2:00 PM"
        pinnedNote={{ blocks: [], id: "n3", date: 123, views: 1 }}
      />
    );
    const task = screen.getByText("Due Today, 2:00 PM", { exact: false });
    expect(task).toBeInTheDocument();
  });
});
