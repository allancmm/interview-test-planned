import React, {ReactNode} from "react";
import {InputAdornment, TextField} from "@mui/material";

type InputTextType = 'number' | 'text';

export interface InputTextProps {
  name: string;
  value: number | string;
  type: InputTextType;
  startAdornment?: ReactNode;
  placeholder?: string
  onChange(name: string, value: string) : void
}
const InputText = ({ name, value, type, startAdornment, placeholder, onChange } : InputTextProps) => {
  return <TextField
            variant="outlined"
            type={type}
            value={value}
            onChange={(e) => onChange(name, e.target.value)}
            InputProps={{startAdornment: <InputAdornment position="start">{startAdornment}</InputAdornment>}}
            placeholder={placeholder ?? ""}
          />
}

export default InputText;
