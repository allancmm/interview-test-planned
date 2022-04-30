import styled from "styled-components";
import { Button as MuiButton } from "@mui/material";

export const Button = styled(MuiButton)`
  && {
    background-color: var(--c-green);
    border-radius: calc( var(--s-base) *3);
    text-transform: none;
    width: fit-content;
    &:hover {
       background-color: var(--c-dark-green);
    }
  }
`;
