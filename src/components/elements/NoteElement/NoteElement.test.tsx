import { shallow } from "enzyme";
import NoteElement from "./NoteElement";
import "@testing-library/jest-dom";

describe("NoteElement Component", () => {
  const wrapper = shallow(
    <NoteElement
      title="Flight Details"
      date="5/3/22"
      content="Get to the airport by 7am before takeoff"
      id="example"
    />
  );
  it("should render NoteElement properly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render title, date and content properly", () => {
    expect(wrapper.find("#title").text()).toBe("Flight Details");
    expect(wrapper.find("#date").text()).toBe("5/3/22");
    expect(wrapper.find("#content").text()).toBe(
      "Get to the airport by 7am before takeoff"
    );
  });
});
