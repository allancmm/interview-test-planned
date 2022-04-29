import React, { useEffect } from "react";
import { InputText, CustomizedPaper, CustomizedList } from "../../../components";
import { useDispatch, useSelector } from "react-redux";
import { updateUsersOrdered, onChangeUserSearch, userState} from "../../../redux/userSlice";
import { FieldUserSearch } from "../../../lib/domain/types/user";
import { Stack, Divider, Grid } from '@mui/material';
import { ReactComponent as SortArrows } from '../../../assets/sort-arrows.svg';
import { ReactComponent as SearchIcon } from '../../../assets/search.svg';
import UserItem from "./userItem";

const DisplayUsers = () => {
  const dispatch = useDispatch();

  const { allUsers, userSearch, usersOrdered } = useSelector(userState);

  const handleChangeUserSearch = (field: FieldUserSearch, value: string) => {
    dispatch(onChangeUserSearch({ field, value }));
  }

  useEffect(() => {
    // TODO - analyse whether space in name doesn't affect sort
    const t =  allUsers
      .filter(u => u.name.toUpperCase().includes(userSearch.toUpperCase()))
      .sort((a, b) =>
        a.name !== b.name ? a.name.localeCompare(b.name) : b.age - a.age
      );
    dispatch(updateUsersOrdered(t));
  }, [allUsers, userSearch, dispatch])

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
      <Divider />
      <Stack p={4} spacing={2}>
        <Grid container>
           <Grid item sm={1}></Grid>

          <Grid item sm={6} alignContent='center' alignItems={'center'} display="flex">
            <div>
                <span>Name</span>
                <SortArrows style={{paddingLeft:"3px",height:'8px'}}/>
            </div>
          </Grid>

          <Grid item sm={5} alignContent='center' alignItems={'center'} display="flex">
            <div>
              <span>Age</span>
              <SortArrows style={{paddingLeft:"3px",height:'8px'}}/>
            </div>
          </Grid>
        </Grid>
        <CustomizedList>
          {/* TODO - use a library (uniqid) to generate unique keys  */}
          {usersOrdered.map((user, index)=><UserItem user={user} key={index}/>)}
        </CustomizedList>
      </Stack>
    </CustomizedPaper>
  );
}
DisplayUsers.defaultProps = {

}
export default DisplayUsers;
