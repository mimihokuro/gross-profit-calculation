import * as React from "react";
import Box from "@mui/material/Box";
import GrossMarginRatio from "./GrossMarginRatio";
import SellingPriceCalculation from "./SellingPriceCalculation";
import CostCalculation from "./CostCalculation";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box width="100%" border="1px #dddddd solid" mt={4} p={2}>
      <Tabs>
        <TabList value={value} onChange={handleChange}>
          <Tab>粗利益計算</Tab>
          <Tab>売価計算</Tab>
          <Tab>原価計算</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <GrossMarginRatio />
          </TabPanel>
          <TabPanel>
            <SellingPriceCalculation />
          </TabPanel>
          <TabPanel>
            <CostCalculation />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
