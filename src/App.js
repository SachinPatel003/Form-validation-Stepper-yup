import { Box, Container, Paper } from "@mui/material";
import MainFormContainer from "./module/MyForm/MainFormContainer";

function App() {
  return (
    <>
      <Container component={Box} p={5}>
        <Paper component={Box} p={3}>
          <MainFormContainer />
        </Paper>
      </Container>
    </>
  );
}

export default App;
