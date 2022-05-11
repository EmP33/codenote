import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContentPoint from "./ContentPoint";

test("should have heading text", () => {
  render(<ContentPoint index="1" heading="Be better" />);
  const heading = screen.getByText("be better", { exact: false });
  expect(heading).toBeInTheDocument();
});
