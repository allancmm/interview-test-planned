import React, { useEffect } from "react";
import { InputText, CustomizedPaper, CustomizedList, CustomizedDivider } from "../../../components";
import { useDispatch, useSelector } from "react-redux";
import { updateUsersOrdered, onChangeUserSearch, userState} from "../../../redux/userSlice";
import { FieldUserSearch } from "../../../lib/domain/types/user";
import { Stack, Grid } from '@mui/material';
import { ReactComponent as SearchIcon } from '../../../assets/search.svg';
import UserItem from "./userItem";
import {HeaderTable, ArrowSortIcon, ContainerAgeTable} from "./style";

const DisplayUsers = () => {
  const dispatch = useDispatch();

  const { allUsers, minAge, maxAge, userSearch, usersOrdered } = useSelector(userState);

  const handleChangeUserSearch = (field: FieldUserSearch, value: string) => {
    dispatch(onChangeUserSearch({ field, value }));
  }

  useEffect(() => {
    // TODO - analyse whether space in name doesn't affect sort
    const t =  allUsers
      .filter(u => u.name.toUpperCase()
                         .includes(userSearch.toUpperCase())
                          && minAge <= u.age && u.age <= maxAge)
      .sort((a, b) =>
        a.name !== b.name ? a.name.localeCompare(b.name) : b.age - a.age
      );
    dispatch(updateUsersOrdered(t));
  }, [allUsers, minAge, maxAge, userSearch, dispatch])

  return (
    <CustomizedPaper>
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
      <CustomizedDivider />
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
        <CustomizedList>
          {/* TODO - use a library (uniqid) to generate unique keys when converting the JSON into object  */}
          {usersOrdered.map((user, index)=><UserItem user={user} key={index}/>)}
        </CustomizedList>
      </Stack>
    </CustomizedPaper>
  );
}
DisplayUsers.defaultProps = {

}
export default DisplayUsers;
