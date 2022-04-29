import React, {FormEvent } from "react";
import {  Stack } from '@mui/material';
import { onChangeAge, setAllUsers, userState } from "../../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { FieldAgeType } from "../../../lib/domain/types/user";
import { User } from "../../../lib/domain/entities";
import { UserService } from "../../../lib/services";
import { defaultUserService } from "../../../lib/context";
import { InputText, CustomizedPaper, CustomButton } from "../../../components";

interface SearchUserProps {
  userService: UserService
}
const SearchUser = ({ userService } : SearchUserProps) => {
  const dispatch = useDispatch();

  const { minAge, maxAge } = useSelector(userState);

  const handleChangeAge = (field: FieldAgeType, value: string) => {
    dispatch(onChangeAge({ field, value }));
  }

  const handleRespGetUsers = (usersResp: User[]) => {
    // TODO - add function fullName to class User
    const users = usersResp.map(({ age, name: { firstName, lastName }}) =>
      ({ age, name: `${firstName} ${ lastName }`}));
    dispatch(setAllUsers(users));
  }

  const retrieveUsers = async (e: FormEvent) => {
    e.preventDefault();
    await Promise.all([
      userService.getAllUsersKid().then(({ data }) => handleRespGetUsers(data)),
      userService.getAllUsersAdults().then(({ data }) => handleRespGetUsers(data)),
      userService.getAllUsersSeniors().then((data) => handleRespGetUsers(data))
    ]);
  }

  return (
    <CustomizedPaper>
      <form onSubmit={retrieveUsers}>
        <Stack spacing={2} p={4}>
            <InputText
              type="number"
              name="minAge"
              startAdornment="Min"
              value={minAge}
              onChange={handleChangeAge}
            />

            <InputText
              type="number"
              name="maxAge"
              startAdornment="Max"
              value={maxAge}
              onChange={handleChangeAge}
            />

            <CustomButton
              type="submit"
              variant="contained"
            >
              Retrieve users
            </CustomButton>
        </Stack>
      </form>
    </CustomizedPaper>
  );
}
SearchUser.defaultProps = {
  userService: defaultUserService
}

export default SearchUser;
