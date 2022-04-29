import React from 'react';
import {Grid, Checkbox } from '@mui/material';
import { UserDisplay } from "../../../../lib/domain/types/user";
import { ContainerAgeTable } from "../style";
import { CustomizedDivider } from "../../../../components";

interface UserItemProps {
  user: UserDisplay;
}

const UserItem = ({ user }: UserItemProps) =>
    <>
      <Grid container>
        <Grid item sm={1}><Checkbox/></Grid>
        <Grid item sm={6} alignItems="center" display="flex">
            <span>{user.name}</span>
        </Grid>
        <Grid item sm={5} alignItems="center" display="flex">
          <ContainerAgeTable>{user.age}</ContainerAgeTable>
        </Grid>
      </Grid>
      <CustomizedDivider sx={{ margin:"var(--s-base) !important" }}/>
    </>;

export default UserItem;
