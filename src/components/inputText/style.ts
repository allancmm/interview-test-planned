import styled from "styled-components";
import { TextField } from "@mui/material";

export const CustomizedTextField = styled(TextField)`
    & .MuiOutlinedInput-root {
        border-radius: var(--s-base);
        border-color: red;

       fieldset {
          border-color: var(--c-light-grey);
        }
    }

    & .MuiInputBase-root {
        color: var(--c-black);
        font-weight: 600;
    }

    & .MuiInputAdornment-root, .MuiTypography-root {
       color: var(--c-light-grey);
    }
`;
