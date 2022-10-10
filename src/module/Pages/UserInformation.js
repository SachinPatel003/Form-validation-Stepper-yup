import React from "react";
import FormRadio from "../../common/inputElements/FormRadio";
import TextField from "../../common/inputElements/TextField";

const UserInformation = ({ control }) => {
  return (
    <>
      <TextField
        control={control}
        label="First name"
        name="firstName"
        helperText="Please enter your First name"
      />
      <TextField
        control={control}
        label="Last name"
        name="lastName"
        helperText="Please enter your First name"
      />
      <FormRadio control={control} name="MyRadio" helperText="Please Select your Gender" />
    </>
  );
};

export default UserInformation;
