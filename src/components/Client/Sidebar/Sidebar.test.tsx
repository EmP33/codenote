import { shallow } from "enzyme";
import { createMemoryHistory } from "history";
import Sidebar from "./Sidebar";
import { Router } from "react-router-dom";

describe("<Sidebar/>", () => {
  const history = createMemoryHistory();
  const mockUser = {
    displayName: "Test User",
    email: "test@gmail.com",
    isLoggedIn: true,
  };
  const wrapper = shallow(
    <Router location={history.location} navigator={history}>
      <Sidebar
        user={mockUser}
        onSignOut={() => (mockUser.isLoggedIn = false)}
      />
    </Router>
  );

  it("should render Sidebar component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
