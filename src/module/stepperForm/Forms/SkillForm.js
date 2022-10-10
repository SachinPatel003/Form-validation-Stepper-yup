import { Box } from "@mui/material";
import React from "react";
import FormCheckBox from "../../../common/inputElements/FormCheckBox";
import FormRating from "../../../common/inputElements/FormRating";
import FormSlider from "../../../common/inputElements/FormSlider";

const SkillForm = ({ control }) => {
  return (
    <>
      <FormRating
        control={control}
        name="MyRating"
      />
      <Box sx={{ margin: "10px 0px" }}>
        <FormSlider
          control={control}
          name="MySlider"
        />
      </Box>
      <FormCheckBox
        control={control}
        name="MyChechBOx"
      />
    </>
  );
};

export default SkillForm;
