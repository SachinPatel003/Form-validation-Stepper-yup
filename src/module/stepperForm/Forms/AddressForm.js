import React from "react";
import FormSelect from "../../../common/inputElements/FormSelect";


const AddressForm = ({ control }) => {
  return (
    <>
      <FormSelect control={control} name="state" label="State"  m1="Gujrat"  m2="Rajasthan"  />
      <FormSelect control={control} name="city" label="City"  m1="Ahmedabad" m2="Jaipur" />
    </>
  );
};

export default AddressForm;
