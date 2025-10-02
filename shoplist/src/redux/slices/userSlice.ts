import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface User {  //user details
  id: string;
  email: string;
  username: string;
}

interface UserState {
  currentUser: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  currentUser: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
      state.error = null;
    },
    updateUserStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateUserSuccess: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    updateUserFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearUser: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    clearUserError: (state) => {
      state.error = null;
    },
  },
});

export const {
  setUser,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  clearUser,
  clearUserError,
} = userSlice.actions;

export default userSlice.reducer;