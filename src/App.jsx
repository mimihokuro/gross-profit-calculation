import { Heading, Stack, Text } from "@chakra-ui/react";
import BasicTabs from "./components/BasicTabs";

function App() {
  return (
    <Stack maxWidth={800} mx="auto" p={4}>
      <Heading
        as="h1"
        size="xl"
        fontWeight="normal"
        noOfLines={1}
        borderBottom="1px"
        py={2}
        borderBottomColor="#dddddd"
      >
        💸粗利計算ツール
      </Heading>
      <Text mt={2}>
        粗利益、売価、原価を計算するツールです。タブで切り替えてお使いください。
      </Text>
      <BasicTabs />
    </Stack>
  );
}

export default App;
