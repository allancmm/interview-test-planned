import React from 'react';
import {Grid, Divider, Checkbox } from '@mui/material';
import { UserDisplay } from "../../../../lib/domain/types/user";

interface UserItemProps {
  user: UserDisplay;
}

const UserItem = ({ user }: UserItemProps) =>
    <>
      <Grid container>
        <Grid item sm={1}><Checkbox/></Grid>

        <Grid item sm={6} alignItems="center" display="flex">
          <div>
            <span>{user.name}</span>
          </div>
        </Grid>
        <Grid item sm={5} alignItems="center" display="flex">
          <div>
             <span>{user.age}</span>
          </div>
        </Grid>
      </Grid>
      <Divider sx={{margin:"2px !important"}}/>
    </>;

export default UserItem;
