import { shallow } from "enzyme";
import Sidebar from "./Sidebar";

describe("<Sidebar/>", () => {
  const mockUser = {
    displayName: "Test User",
    email: "test@gmail.com",
    isLoggedIn: true,
  };
  const wrapper = shallow(
    <Sidebar user={mockUser} onSignOut={() => (mockUser.isLoggedIn = false)} />
  );

  it("should render Sidebar component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
