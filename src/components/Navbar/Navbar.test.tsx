import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

test("renders logo element", () => {
  render(<Navbar />);
  const logoElement = screen.getByText(/CODENOTE/i);
  expect(logoElement).toBeInTheDocument();
});
