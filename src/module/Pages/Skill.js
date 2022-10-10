import { Box } from "@mui/material";
import React from "react";
import FormCheckBox from "../../common/inputElements/FormCheckBox";
import FormRating from "../../common/inputElements/FormRating";
import FormSlider from "../../common/inputElements/FormSlider";

const Skill = ({ control }) => {
  return (
    <>
      <FormRating
        control={control}
        name="MyRating"
        helperText="Rate your Skill"
      />
      <Box sx={{ margin: "10px 0px" }}>
        <FormSlider
          control={control}
          name="MySlider"
          helperText="Slide as per Your intrest in Development"
        />
      </Box>
      <FormCheckBox
        control={control}
        name="MyChechBOx"
        helperText="Accept T&C"
      />
    </>
  );
};

export default Skill;
