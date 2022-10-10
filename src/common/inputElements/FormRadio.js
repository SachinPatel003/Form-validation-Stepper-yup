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
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });

  // const computedHelperText = invalid ? error?.message : helperText;

  return (
    <FormControl error={invalid}>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup value={value} onChange={onChange}>
        <FormControlLabel value="male" label="male" control={<Radio />} />
        <FormControlLabel value="Female" label="Female" control={<Radio />} />
      </RadioGroup>
      <FormHelperText>
        <span>{invalid ? error?.message : helperText}</span>
      </FormHelperText>
    </FormControl>
  );
}
