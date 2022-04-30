import styled from "styled-components";
import { List as MuiList } from "@mui/material";

export const List = styled(MuiList)`
  overflow-x: auto;
  overflow-y: overlay;
  max-height: 350px;
  padding: 0 !important;
`;
