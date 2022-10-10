import React from "react";
import { Button, Step, StepLabel, Stepper, Typography } from "@mui/material";
import UserInformation from "../Pages/UserInformation";
import Aquisition from "../Pages/Address";
import { DevTool } from "@hookform/devtools";
import Skill from "../Pages/Skill";

const MainForm = ({
  handleBack,
  onSubmit,
  handleNext,
  control,
  handleSubmit,
  activeStep,
}) => {
  return (
    <>
      <Stepper alternativeLabel activeStep={activeStep}>
        <Step>
          <StepLabel>USER INFORMATION</StepLabel>
        </Step>
        <Step>
          <StepLabel>ADDRESS</StepLabel>
        </Step>
        <Step>
          <StepLabel>SKILL</StepLabel>
        </Step>
      </Stepper>
      {activeStep === 3 ? (
        <Typography align="center" variant="h1">
          Thank You
        </Typography>
      ) : (
        <>
          <form>
            {(function getStepContent(activeStep) {
              switch (activeStep) {
                case 0:
                  return <UserInformation control={control} />;
                case 1:
                  return <Aquisition control={control} />;
                case 2:
                  return <Skill control={control} />;
                default:
                  return "this is default";
              }
            })(activeStep)}
            <div>
            <Button 
            sx={{margin:"10px 20px"}}
              variant="contained"
              onClick={handleBack}
              disabled={activeStep === 0}
              color="primary"
            >
              Back
            </Button>
            {activeStep === 2 ? (
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit(onSubmit)}
              >
                Finish
              </Button>
            ) : (
              <Button variant="contained" onClick={handleNext} color="primary">
                Next
              </Button>
            )}
            </div>
          </form>
          <DevTool control={control} />
        </>
      )}
    </>
  );
};

export default MainForm;
