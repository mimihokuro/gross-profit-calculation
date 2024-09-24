import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

const GrossProfitRatio = () => {
  const [cost, setCost] = useState("");
  const [sales, setSales] = useState("");
  const [grossProfit, setGrossProfit] = useState(0);

  const calculationGrossProfit = () => {
    const parseCost = parseFloat(cost);
    const parseSales = parseFloat(sales);
    if (!isNaN(parseCost) && !isNaN(parseSales)) {
      setGrossProfit(parseSales - parseCost);
    } else {
      setGrossProfit(0);
    }
  };

  const GROSS_MARGIN_RATIO_ITEMS = [
    { label: "原価", type: cost, func: setCost },
    { label: "売上", type: sales, func: setSales },
  ];

  return (
    <>
      <Stack direction="row" spacing={8} alignItems="center">
        <Stack spacing={4}>
          {GROSS_MARGIN_RATIO_ITEMS.map((item) => {
            return (
              <Stack
                spacing={1}
                key={item.label}
                direction="row"
                alignItems="center"
                maxWidth={160}
              >
                <TextField
                  id="outlined-basic"
                  label={item.label}
                  variant="outlined"
                  value={item.type}
                  onChange={(e) => item.func(e.target.value)}
                />
                <Typography variant="subtitle1">円</Typography>
              </Stack>
            );
          })}
        </Stack>
        <Button
          variant="contained"
          fontSize={24}
          fontWeight="bold"
          onClick={calculationGrossProfit}
        >
          計算実行＞
        </Button>
        <Stack
          spacing={1}
          direction="row"
          alignItems="center"
          backgroundColor="#f0f0f0"
          px={4}
          py={2}
          borderRadius={2}
          alignSelf="stretch"
        >
          <Typography variant="subtitle1" fontSize={24}>
            粗利：
          </Typography>
          <Typography variant="subtitle1" fontSize={40}>
            {grossProfit}
          </Typography>
          <Typography variant="subtitle1" fontSize={32}>
            円
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default GrossProfitRatio;
