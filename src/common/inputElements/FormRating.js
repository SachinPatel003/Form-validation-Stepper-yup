import * as React from "react";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import { useController } from "react-hook-form";
import { Rating } from "@mui/material";

export default function FormRating({ control, name, helperText }) {
  const {
    field: { onChange, value },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });

  return (
    <Box sx={{ display: "flex" }}>
      <FormControl
        error={invalid}
        sx={{ my: 0 }}
        component="fieldset"
        variant="standard"
      >
        <FormLabel component="legend">Rating</FormLabel>
        <Rating onChange={onChange} value={value} />
        <FormHelperText>{invalid ? error?.message : helperText}</FormHelperText>
      </FormControl>
    </Box>
  );
}
