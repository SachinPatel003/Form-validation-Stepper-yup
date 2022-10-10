import { TextField as MuiTextField } from "@mui/material";
import * as React from "react";
import { useController } from "react-hook-form";

const TextField = ({ control, label, name, helperText }) => {
  const {
    field: { ref, value, onChange, ...field },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });

  const computedHelperText = invalid ? error?.message : helperText;

  return (
    <MuiTextField
    sx={{margin:"10px 0px"}}
      {...field}
      value={value}
      fullWidth
      inputRef={ref}
      onChange={onChange}
      id={field.name}
      label={label}
      error={invalid}
      aria-invalid={invalid}
      helperText={<span>{computedHelperText}</span>}
    />
  );
};

export default TextField;
