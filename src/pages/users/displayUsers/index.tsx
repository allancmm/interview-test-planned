import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { Stack, Grid } from '@mui/material';
import { updateUsersOrdered, onChangeUserSearch, userState } from "../../../redux/userSlice";
import { FieldUserSearch } from "../../../lib/domain/types/user";
import { InputText, Paper, List, Divider } from "../../../components";
import UserItem from "./userItem";
import { HeaderTable, ArrowSortIcon, SearchIcon, ContainerAgeTable } from "./style";

const DisplayUsers = () => {
  const dispatch = useAppDispatch();

  const { allUsers, userSearch, usersOrdered } = useAppSelector(userState);

  const handleChangeUserSearch = (field: FieldUserSearch, value: string) => {
    dispatch(onChangeUserSearch({ field, value }));
  }

  useEffect(() => {
    dispatch(updateUsersOrdered());
  }, [allUsers, userSearch, dispatch])

  return (
    <Paper>
      <Stack p={4} spacing={2}>
          <InputText
            type='text'
            name="userSearch"
            value={userSearch}
            onChange={handleChangeUserSearch}
            placeholder="Search Users"
            startAdornment={<SearchIcon />}
          />
      </Stack>

      <Divider />

      <Stack p={4} spacing={2}>
        <Grid container>
           <Grid item sm={1}></Grid>

          <Grid item sm={6} alignContent='center' alignItems={'center'} display="flex">
              <HeaderTable>Name</HeaderTable>
              <ArrowSortIcon />
          </Grid>

          <Grid item sm={5} alignContent='center' alignItems={'center'} display="flex">
            <ContainerAgeTable>
              <HeaderTable>Age</HeaderTable>
            </ContainerAgeTable>
            <ArrowSortIcon />
          </Grid>
        </Grid>
        <List>
          {/* TODO - use a library like uniqid to generate unique keys when converting the JSON into object  */}
          { usersOrdered.map((user, index)=><UserItem user={user} key={index}/>) }
        </List>
      </Stack>
    </Paper>
  );
}

export default DisplayUsers;
