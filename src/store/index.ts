import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user-slice";

const store = configureStore({
  reducer: { user: userSlice.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
