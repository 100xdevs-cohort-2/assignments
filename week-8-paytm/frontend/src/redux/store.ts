import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices/appSlice";
import { api } from "./slices/api";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    appSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
