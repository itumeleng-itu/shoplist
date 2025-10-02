import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;   //is the user logged in?
  token: string | null;       // a key for the users session
  userId: string | null;      // logged in user id
  loading: boolean;           // is the user currently logging in
  error: string | null;       // error message
}

const initialState: AuthState = {    //initially there is no login
  isAuthenticated: false,
  token: null,
  userId: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {   //user is trying to login
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action: PayloadAction<{ token: string; userId: string }>) => {  //logged in successfully
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.userId = action.payload.userId;
      state.loading = false;
      state.error = null;
    },
    loginFailure: (state, action: PayloadAction<string>) => {   //failed to login
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {              //ending session
      state.isAuthenticated = false;
      state.token = null;
      state.userId = null;
      state.loading = false;
      state.error = null;
    },
    clearError: (state) => {   //clearing error messages
      state.error = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout, clearError } = authSlice.actions;
export default authSlice.reducer;