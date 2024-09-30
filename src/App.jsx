import { Container, Typography } from "@mui/material";
import BasicTabs from "./components/BasicTabs";

function App() {
  return (
    <Container maxWidth="md">
      <Typography variant="h1" mt={4} gutterBottom fontSize={40}>
        💸粗利計算ツール
      </Typography>
      <BasicTabs />
    </Container>
  );
}

export default App;
