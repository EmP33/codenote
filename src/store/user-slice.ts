import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface userState {
  user: any;
}

const initialState: userState = {
  user: true,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchUser(state, action: PayloadAction<any>) {
      state.user = action.payload;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
