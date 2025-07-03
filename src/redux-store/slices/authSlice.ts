import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthSliceType as State, TokenRefreshResponseType } from "@/types";

const initialState: State = {
  name: "",
  email: "",
  access: "",
  refresh: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state: State, action: PayloadAction<State>) => {
      state = action.payload;
    },

    logOut: (state: State) => {
      state = initialState;
    },

    changeRefreshedToken: (
      state: State,
      action: PayloadAction<TokenRefreshResponseType>
    ) => {
      state.access = action.payload.access;
    },
  },
});

export default authSlice.reducer;
export const { logIn, logOut, changeRefreshedToken } = authSlice.actions;
