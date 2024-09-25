import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

const GrossProfitRatio = () => {
  const [cost, setCost] = useState("");
  const [sales, setSales] = useState("");
  const [grossProfit, setGrossProfit] = useState(0);
  const [grossProfitRatio, setGrossProfitRatio] = useState(0);

  const calculationGrossProfit = () => {
    const parseCost = parseFloat(cost);
    const parseSales = parseFloat(sales);
    if (!isNaN(parseCost) && !isNaN(parseSales)) {
      setGrossProfit(parseSales - parseCost);
      setGrossProfitRatio(Math.round((grossProfit / parseSales) * 1000) / 10);
    } else {
      setGrossProfit(0);
      setGrossProfitRatio(0);
    }
  };

  const GROSS_MARGIN_RATIO_ITEMS = [
    { label: "原価", type: cost, func: setCost },
    { label: "売上", type: sales, func: setSales },
  ];

  return (
    <>
      <Stack
        direction="row"
        gap={4}
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack spacing={4} backgroundColor="#f5f5f5" borderRadius={2} p={2}>
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
          flexGrow={1}
          borderRadius={2}
          backgroundColor="#f0f0f0"
          justifyContent="center"
        >
          <Stack direction="row" alignItems="center" p={2} pb={0}>
            <Typography variant="subtitle1" fontSize={24}>
              粗利益：
            </Typography>
            <Typography variant="subtitle1" fontSize={32}>
              {grossProfit}
            </Typography>
            <Typography variant="subtitle1" fontSize={28}>
              円
            </Typography>
          </Stack>
          <Stack
            backgroundColor="#f0f0f0"
            direction="row"
            alignItems="center"
            p={2}
            pt={0}
          >
            <Typography variant="subtitle1" fontSize={24}>
              粗利率：
            </Typography>
            <Typography variant="subtitle1" fontSize={28}>
              {grossProfitRatio}
            </Typography>
            <Typography variant="subtitle1" fontSize={24}>
              %
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default GrossProfitRatio;
