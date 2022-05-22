import { shallow } from "enzyme";
import LoadingPage from "./LoadingPage";

it("should render LoadingPage properly", () => {
  expect(shallow(<LoadingPage />)).toMatchSnapshot();
});
