import { createSlice } from '@reduxjs/toolkit';
import { User } from './userSlice';

export interface UserReactHookForm {
  userReactHookForm: {
    userReactHookForm: User;
  };
}

export const initialState = {
  userReactHookForm: {},
};

export const userReactHookFormSlice = createSlice({
  name: 'userReactHookForm',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.userReactHookForm = action.payload;
    },
  },
});

export const { addUser } = userReactHookFormSlice.actions;
export const selectReactHookFormUser = (state: UserReactHookForm) =>
  state.userReactHookForm.userReactHookForm;
export default userReactHookFormSlice.reducer;
