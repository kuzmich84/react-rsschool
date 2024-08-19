import { createSlice } from '@reduxjs/toolkit';

export interface User {
  name: string;
  age: string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  tc: string;
  country: string;
  picture: string;
}

export interface UserUncontrolled {
  user: {
    userUncontrolled: User;
  };
}

export const initialState = {
  userUncontrolled: {},
};

export const userSlice = createSlice({
  name: 'userUncontrolled',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.userUncontrolled = action.payload;
    },
  },
});

export const { addUser } = userSlice.actions;
export const selectUser = (state: UserUncontrolled) => state.user.userUncontrolled;
export default userSlice.reducer;
