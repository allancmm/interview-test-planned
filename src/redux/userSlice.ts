import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { UserDisplay, FieldAgeType, FieldUserSearch } from "../lib/domain/types/user";
import { User } from "../lib/domain/entities";

export interface UserState {
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
    updateAllUsers: (state, action: PayloadAction<User[]> ) => {
      // TODO - add function fullName to class User
      state.allUsers = action.payload.map(({ age, name: { firstName, lastName }}) =>
        ({ age, name: `${firstName} ${ lastName }`}))
    },
    updateUsersOrdered: (state) => {
      const { allUsers, userSearch, minAge, maxAge } = state;
      state.usersOrdered =  allUsers
        .filter(u => u.name.toUpperCase()
            .includes(userSearch.toUpperCase())
          && minAge <= u.age && u.age <= maxAge)
        .sort((a, b) =>
          a.name !== b.name ? a.name.localeCompare(b.name) : b.age - a.age
        );
    },
    onChangeAge: (state, action: PayloadAction<{ field: FieldAgeType, value: string}>) => {
      const { payload: {field, value} } = action;
      state[field] = parseInt(value, 10) || 0;
    },
    onChangeUserSearch: (state, action: PayloadAction<{ field: FieldUserSearch, value: string}>) => {
      const { payload: { field, value } } = action;
      state[field] = value;
    }
  }
});

export const { updateAllUsers, updateUsersOrdered, onChangeAge, onChangeUserSearch } = userSlice.actions;

export const userState = (state: RootState) => state.user;

export default userSlice.reducer;
