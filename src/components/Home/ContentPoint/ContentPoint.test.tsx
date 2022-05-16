import { shallow } from "enzyme";
import ContentPoint from "./ContentPoint";

it("expect to render ContentPoint component", () => {
  expect(
    shallow(<ContentPoint index="01" heading="Example heading" />)
  ).toMatchSnapshot();
});
