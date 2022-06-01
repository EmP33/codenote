import { render, screen } from "@testing-library/react";
import NoteElement from "./NoteElement";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import "@testing-library/jest-dom";

describe("NoteElement Component", () => {
  const history = createMemoryHistory();
  render(
    <Router location={history.location} navigator={history}>
      <NoteElement
        hoverOnNotes={true}
        title="Flight Details"
        date="5/3/22"
        content="Get to the airport by 7am before takeoff"
        id="example"
      />
    </Router>
  );
  it("should render title, date and content properly", () => {
    expect(screen.getByText("Flight Details")).toBeInTheDocument();
    expect(screen.getByText("5/3/22")).toBeInTheDocument();
    expect(
      screen.getByText("Get to the airport by 7am before takeoff")
    ).toBeInTheDocument();
  });
});
