import React  from "react";
import SearchUser from "./searchUser";
import DisplayUsers from "./displayUsers";
import { Grid } from "@mui/material";

const Users = () =>
      <Grid container>
        <Grid item sm={12}>
          {/* TODO - create a component for tittle  */}
          <h2>Users</h2>
        </Grid>
        <Grid container spacing={4}>
          <Grid item sm={12} md={4}>
            <SearchUser />
          </Grid>
          <Grid item sm={12} md={8}>
            <DisplayUsers />
          </Grid>
        </Grid>
      </Grid>;

export default Users;
