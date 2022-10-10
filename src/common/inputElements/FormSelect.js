import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useController } from "react-hook-form";
import { FormHelperText } from "@mui/material";

export default function FormSelect({helperText, control, name , label , ...props}) {
  const {
    field: {  onChange, value },
    fieldState: { error },
  } = useController({
    name,
    control,
  });
  return (
    <Box sx={{ width: 300, my: 2 }}>
      <FormControl error={!!error} fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          label="Age"
          onChange={onChange}
          value={value}
        >
          <MenuItem value={props.m1}>{props.m1}</MenuItem>
          <MenuItem value={props.m2}>{props.m2}</MenuItem>
        </Select>
        <FormHelperText>{error?.message}</FormHelperText>
      </FormControl>
    </Box>
  );
}
