import React from "react";
import FormSelect from "../../common/inputElements/FormSelect";


const Aquisition = ({ control }) => {
  return (
    <>
      <FormSelect control={control} name="state" label="State" helperText="Please select your state" m1="Gujrat"  m2="Rajasthan"  />
      <FormSelect control={control} name="city" label="City" helperText="Please select your city" m1="Ahmedabad" m2="Jaipur" />
x
    </>
  );
};

export default Aquisition;
