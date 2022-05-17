import { shallow } from "enzyme";
import ContentPoint from "./ContentPoint";

describe("ContentPoint component", () => {
  const wrapper = shallow(
    <ContentPoint index="01" heading="Example heading" />
  );
  it("expect to render ContentPoint component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render index and heading properly in heading Typography", () => {
    expect(wrapper.find("#heading").text()).toBe("01/ Example heading");
  });
});
