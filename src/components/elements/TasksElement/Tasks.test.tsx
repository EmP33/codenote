import { shallow } from "enzyme";
import Tasks from "./Tasks";

it("should render Tasks properly", () => {
  expect(shallow(<Tasks />)).toMatchSnapshot();
});
