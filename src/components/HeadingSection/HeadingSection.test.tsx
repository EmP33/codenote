import { shallow } from "enzyme";
import HeadingSection from "./HeadingSection";

it("should render HeadingSection component", () => {
  expect(shallow(<HeadingSection />)).toMatchSnapshot();
});
