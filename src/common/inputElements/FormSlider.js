import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useController } from "react-hook-form";
import { FormControl, FormHelperText, Typography } from "@mui/material";

export default function FormSlider({ name, control, helperText }) {
  const {
    field: { onChange, value },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });
  return (
    <Box >
      <FormControl error={invalid}>
        <Typography>Your intrest in Development</Typography>
        <Slider sx={{width:400}} onChange={onChange} value={value} />
        <FormHelperText sx={{margin:"0px 0px 20px 0px"}}>{error?.message}</FormHelperText>
      </FormControl>
    </Box>
  );
}