import { Box, Container, Paper } from "@mui/material";
import StepperFormContainer from "./module/stepperForm/stepperForm/StepperFormContainer";

function App() {
  return (
    <>
      <Container component={Box} p={5}>
        <Paper component={Box} p={3}>
          <StepperFormContainer />
        </Paper>
      </Container>
    </>
  );
}

export default App;
