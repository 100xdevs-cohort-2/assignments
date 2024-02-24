import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface appSliceInitialState {
  isLoggedIn: boolean;
  currentUser: { username?: string; balance?: number };
}

const initialState: appSliceInitialState = {
  isLoggedIn: false,
  currentUser: {},
};

const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    updateIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    updateCurrentUser: (
      state,
      action: PayloadAction<{ username: string; balance: number }>
    ) => {
      state.currentUser = action.payload;
    },
  },
});

export const { updateIsLoggedIn, updateCurrentUser } = appSlice.actions;
export default appSlice.reducer;
