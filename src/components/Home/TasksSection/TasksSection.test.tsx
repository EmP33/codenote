import { shallow } from "enzyme";
import TasksSection from "./TasksSection";

it("should render TasksSection properly", () => {
  expect(shallow(<TasksSection />)).toMatchSnapshot();
});
