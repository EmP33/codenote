import { shallow } from "enzyme";
import NotesSection from "./NotesSection";

it("should render NotesSection properly", () => {
  expect(shallow(<NotesSection />)).toMatchSnapshot();
});
