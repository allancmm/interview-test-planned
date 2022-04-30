import React, { FormEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { Stack } from '@mui/material';
import { onChangeAge, updateAllUsers, userState } from "../../../redux/userSlice";
import { FieldAgeType } from "../../../lib/domain/types/user";
import { UserService } from "../../../lib/services";
import { defaultUserService } from "../../../lib/context";
import { InputText, Paper, Button } from "../../../components";

interface SearchUserProps {
  userService: UserService
}
const SearchUser = ({ userService } : SearchUserProps) => {
  const dispatch = useAppDispatch();

  const { minAge, maxAge } = useAppSelector(userState);

  const handleChangeAge = (field: FieldAgeType, value: string) => {
    dispatch(onChangeAge({ field, value }));
  }

  const retrieveUsers = async (e: FormEvent) => {
    e.preventDefault();
    // TODO - call API inside redux
    const [kids, adults, seniors] = await Promise.all([
      userService.getAllUsersKid(),
      userService.getAllUsersAdults(),
      userService.getAllUsersSeniors()
    ]);
    dispatch(updateAllUsers([...kids.data, ...adults.data, ...seniors]));
  }

  return (
    <Paper>
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

            <Button type="submit" variant="contained">
              Retrieve users
            </Button>
        </Stack>
      </form>
    </Paper>
  );
}
SearchUser.defaultProps = {
  userService: defaultUserService
}

export default SearchUser;
