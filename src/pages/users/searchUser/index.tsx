import React from "react";
import { Button, Stack } from '@mui/material';
import { onChangeAge, setAllUsers, userState } from "../../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { FieldAgeType } from "../../../lib/domain/types/user";
import { User } from "../../../lib/domain/entities";
import { UserService } from "../../../lib/services";
import { defaultUserService } from "../../../lib/context";
import { InputText, CustomizedPaper } from "../../../components";

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

  const retrieveUsers = async () => {
    await Promise.all([
      userService.getAllUsersKid().then(({ data }) => handleRespGetUsers(data)),
      userService.getAllUsersAdults().then(({ data }) => handleRespGetUsers(data)),
      userService.getAllUsersSeniors().then((data) => handleRespGetUsers(data))
    ]);
  }

  return (
    <CustomizedPaper>
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

          <Button
            onClick={retrieveUsers}
            variant="contained"
            style={{maxWidth: "45%",
                    backgroundColor: "#3f9163",
                    borderRadius: 20,
                    textTransform:'none',
                    marginBottom:'16px',
                    display:"inline-block"
                  }}
          >
            Retrieve users
          </Button>
      </Stack>
    </CustomizedPaper>
  );
}
SearchUser.defaultProps = {
  userService: defaultUserService
}

export default SearchUser;
