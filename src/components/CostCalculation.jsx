import { Button, Input, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";

const CostCalculation = () => {
  const [sellingPrice, setSellingPrice] = useState("");
  const [grossProfit, setGrossProfit] = useState("");
  const [cost, setCost] = useState(0);

  const calculationCost = () => {
    const parseSellingPrice = parseFloat(sellingPrice);
    const parseGrossProfit = parseFloat(grossProfit / 100);
    console.log(parseGrossProfit);
    if (!isNaN(parseSellingPrice) && !isNaN(parseGrossProfit)) {
      const calculatedSellingPrice = Math.floor(
        parseSellingPrice - parseSellingPrice * parseGrossProfit
      );
      setCost(calculatedSellingPrice.toLocaleString());
    } else {
      setCost(0);
    }
  };

  const GROSS_MARGIN_RATIO_ITEMS = [
    {
      label: "売上／売価（税抜）",
      type: sellingPrice,
      func: setSellingPrice,
      unit: "円",
    },
    {
      label: "粗利率",
      type: grossProfit,
      func: setGrossProfit,
      unit: "%",
    },
  ];

  return (
    <>
      <Stack
        alignItems="center"
        justifyContent="space-between"
        direction={{ base: "column", sm: "row" }}
        gap={4}
      >
        <Stack spacing={4} backgroundColor="#f5f5f5" borderRadius={2} p={2}>
          {GROSS_MARGIN_RATIO_ITEMS.map((item) => {
            return (
              <Stack key={item.label}>
                <Text fontSize="14px">{item.label}</Text>
                <Stack
                  direction="row"
                  alignItems="center"
                  maxWidth={{ sm: "160px" }}
                >
                  <Input
                    value={item.type}
                    label={item.label}
                    onChange={(e) => item.func(e.target.value)}
                    borderColor="#aaaaaa"
                    focusBorderColor="teal.400"
                  />
                  <Text variant="subtitle1">{item.unit}</Text>
                </Stack>
              </Stack>
            );
          })}
        </Stack>
        <Text
          fontWeight="bold"
          fontSize={24}
          transform={{ base: "rotate(90deg)", sm: "rotate(0deg)" }}
        >
          ＞
        </Text>
        <Button
          fontWeight="bold"
          variant="filled"
          backgroundColor="teal.400"
          color="#ffffff"
          sx={{ fontSize: "20px" }}
          onClick={calculationCost}
        >
          計算実行
        </Button>
        <Stack
          flexGrow={1}
          borderRadius={8}
          gap={1}
          py={4}
          px={2}
          sx={{
            width: { xs: "100%", sm: "initial" },
            mt: { xs: "2rem", sm: "0" },
            ml: { xs: "0", sm: "2rem" },
          }}
          backgroundColor="#f0f0f0"
          justifyContent="center"
          alignItems="center"
        >
          <Stack direction="row" alignItems="center" flexWrap="wrap">
            <Text variant="subtitle1" fontSize={24} lineHeight="1">
              原価：
            </Text>
            <Stack direction="row" alignItems="center">
              <Text variant="subtitle1" fontSize={36} lineHeight="1">
                {cost}
              </Text>
              <Text variant="subtitle1" fontSize={24} lineHeight="1">
                円
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default CostCalculation;
