import styled from "styled-components";
import { Button } from "@mui/material";

export const CustomButton = styled(Button)`
  && {
    background-color: var(--c-green);
    border-radius: calc( var(--s-base) *3);
    text-transform: none;
    width: fit-content;
    &:hover {
       background-color: var(--c-green);
    }
  }
`;
