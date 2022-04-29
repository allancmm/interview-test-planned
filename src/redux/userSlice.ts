import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { UserDisplay, FieldAgeType, FieldUserSearch } from "../lib/domain/types/user";

interface UserState {
  allUsers: UserDisplay[],
  usersOrdered: UserDisplay[]
  minAge: number,
  maxAge: number,
  userSearch: string
}

const initialState: UserState = {
  allUsers: [],
  usersOrdered: [],
  minAge: 0,
  maxAge: 100,
  userSearch: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAllUsers: (state, { payload }) => {
      state.allUsers = [...state.allUsers, ...payload]
    },
    updateUsersOrdered: (state, { payload }) => {
       state.usersOrdered = payload;
    },
    onChangeAge: (state, action: PayloadAction<{ field: FieldAgeType, value: string}>) => {
      const { payload: {field, value} } = action;
      state[field] = parseInt(value, 10);
    },
    onChangeUserSearch: (state, action: PayloadAction<{ field: FieldUserSearch, value: string}>) => {
      const { payload: {field, value} } = action;
      state[field] = value;
    }
  }
});

export const { setAllUsers, updateUsersOrdered, onChangeAge, onChangeUserSearch } = userSlice.actions;

export const userState = (state: RootState) => state.user;

export default userSlice.reducer;
