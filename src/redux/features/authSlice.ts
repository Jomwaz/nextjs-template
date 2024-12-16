import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  isGroupLoading: boolean;
  groups: object;
}

const initialState = {
  isAuthenticated: false,
  isLoading: true,
  isGroupLoading: true,
  groups: {},
} as AuthState;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state) => {
      state.isAuthenticated = true;
    },
    setGroups: (state, action) => {
      state.groups = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.groups = {};
    },
    finishInitialLoad: (state) => {
      state.isLoading = false;
    },
    finishGroupLoading: (state) => {
      state.isGroupLoading = false;
    },
  },
});

export const {
  setAuth,
  logout,
  finishInitialLoad,
  finishGroupLoading,
  setGroups,
} = authSlice.actions;
export default authSlice.reducer;
