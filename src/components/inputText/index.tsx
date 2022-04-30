import React, {ReactNode} from "react";
import { InputAdornment } from "@mui/material";
import { CustomizedTextField } from "./style";

type InputTextType = 'number' | 'text';

export interface InputTextProps {
  name: string;
  value: number | string;
  type: InputTextType;
  startAdornment?: ReactNode;
  placeholder?: string
  onChange(name: string, value: string) : void
}
const InputText = ({ name, value, type, startAdornment, placeholder, onChange } : InputTextProps) =>
  <CustomizedTextField
            variant="outlined"
            type={type}
            value={value}
            onChange={(e) => onChange(name, e.target.value)}
            placeholder={placeholder || ""}
            {...(startAdornment ?
              { InputProps: { startAdornment: <InputAdornment position="start">{startAdornment}</InputAdornment> }}
              : {} )
            }
  />;

export default InputText;
