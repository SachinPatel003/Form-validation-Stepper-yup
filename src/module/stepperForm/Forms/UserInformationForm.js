import React from "react";
import FormRadio from "../../../common/inputElements/FormRadio";
import TextField from "../../../common/inputElements/TextField";

const UserInformationForm = ({ control }) => {
  return (
    <>
      <TextField
        control={control}
        label="First name"
        name="firstName"
      />
      <TextField
        control={control}
        label="Last name"
        name="lastName"
      />
      <FormRadio control={control} name="MyRadio" />
    </>
  );
};

export default UserInformationForm;
