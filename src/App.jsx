import { Container, Typography } from "@mui/material";
import BasicTabs from "./components/BasicTabs";

function App() {
  return (
    <Container>
      <Typography variant="h1" gutterBottom>
        粗利計算ツール
      </Typography>
      <BasicTabs />
    </Container>
  );
}

export default App;
