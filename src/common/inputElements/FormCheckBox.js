import * as React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
import { useController } from "react-hook-form";

export default function FormCheckBox({ control, name, helperText }) {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <Box sx={{ display: "flex" }}>
      <FormControl
        error={!!error}
        component="fieldset"
        variant="standard"
      >
        <FormControlLabel
          control={<Checkbox onChange={onChange} value={value}/>}
          label="Term And Condition"
        />
        <FormHelperText>{error?.message}</FormHelperText>
      </FormControl>
    </Box>
  );
}
