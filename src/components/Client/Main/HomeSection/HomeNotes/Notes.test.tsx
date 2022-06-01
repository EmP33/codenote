// import { screen, render } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import Notes from "./Notes";
// import { createMemoryHistory } from "history";
// import { Router } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "../../../../../store/index";
// import { app as firebase } from "../../../../../firebase";

// jest.mock("firebase/app", () => {
//   return {
//     auth: jest.fn(),
//   };
// });

// describe("<Notes/>", () => {
//   const history = createMemoryHistory();
//   (firebase.auth as jest.Mocked<any>).mockReturnValueOnce({
//     currentUser: { email: "example@gmail.com", uid: 1, emailVerified: true },
//   });

//   it("should switch category of notes on button click", () => {
//     const button = screen.getByText(/most popular/i);
//     userEvent.click(button);
//     expect(button).toBeDisabled();
//   });
//   it("should render specific amount of notes", () => {});
// });
