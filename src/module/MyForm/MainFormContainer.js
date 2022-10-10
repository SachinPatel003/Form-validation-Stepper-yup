import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import MyForm from "./MainForm";
import { ValidationSchema } from "../../common/Validation/ValidationSchema";

const MainFormContainer = () => {
  const [activeStep, setActiveStep] = useState(0);

  const currentValidationSchema = ValidationSchema[activeStep];

  const formMethods = useForm({
    // shouldUnregister: false,
    resolver: yupResolver(currentValidationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      MyRadio: "",
      state: "",
      city: "",
      MyChechBOx: false,
      MyRating: null,
      MySlider: null
    },
    mode: "onChange",
  });

  const { control, trigger, handleSubmit } = formMethods;

  const handleNext = async () => {
    const isStepValid = await trigger();
    if (isStepValid) setActiveStep(activeStep + 1);
  };
  const onSubmit = (data) => {
    console.log(data);
    alert(JSON.stringify(data))
    handleNext();
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
   <>
   <MyForm handleBack={handleBack} onSubmit={onSubmit} handleNext={handleNext} control={control} handleSubmit={handleSubmit} activeStep={activeStep} />
   </>
  );
};

export default MainFormContainer;
