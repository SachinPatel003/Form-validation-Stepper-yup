import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useController } from "react-hook-form";
import { FormHelperText } from "@mui/material";

export default function FormRadio({ helperText, name, control }) {
  const {
    field: {  onChange, value },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <FormControl error={!!error}>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup value={value} onChange={onChange}>
        <FormControlLabel value="male" label="male" control={<Radio />} />
        <FormControlLabel value="Female" label="Female" control={<Radio />} />
      </RadioGroup>
      <FormHelperText>
        <span>{error?.message}</span>
      </FormHelperText>
    </FormControl>
  );
}
