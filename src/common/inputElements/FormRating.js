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
    fieldState: {  error },
  } = useController({
    name,
    control,
  });

  return (
    <Box sx={{ display: "flex" }}>
      <FormControl
        error={!!error}
        sx={{ my: 2 }}
        component="fieldset"
        variant="standard"
      >
        <FormLabel component="legend">Rating your Skill</FormLabel>
        <Rating onChange={onChange} value={value} />
        <FormHelperText>{error?.message}</FormHelperText>
      </FormControl>
    </Box>
  );
}
