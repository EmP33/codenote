import { shallow } from "enzyme";
import Navbar from "./Navbar";

it("should render Navbar properly", () => {
  expect(shallow(<Navbar />)).toMatchSnapshot();
});
