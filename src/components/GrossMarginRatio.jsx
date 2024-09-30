import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { ArrowForwardIos } from "@mui/icons-material";

const GrossProfitRatio = () => {
  const [cost, setCost] = useState("");
  const [sales, setSales] = useState("");
  const [grossProfit, setGrossProfit] = useState(0);
  const [grossProfitRatio, setGrossProfitRatio] = useState(0);

  const calculationGrossProfit = () => {
    const parseCost = parseFloat(cost);
    const parseSales = parseFloat(sales);
    if (!isNaN(parseCost) && !isNaN(parseSales)) {
      const calculatedGrossProfit = parseSales - parseCost;
      const calculatedGrossProfitRatio =
        Math.round((calculatedGrossProfit / parseSales) * 1000) / 10;
      setGrossProfit(calculatedGrossProfit.toLocaleString());
      setGrossProfitRatio(calculatedGrossProfitRatio);
    } else {
      setGrossProfit(0);
      setGrossProfitRatio(0);
    }
  };

  const GROSS_MARGIN_RATIO_ITEMS = [
    { label: "原価", type: cost, func: setCost },
    { label: "売上／売価（税抜）", type: sales, func: setSales },
  ];

  return (
    <>
      <Stack
        alignItems="center"
        justifyContent="space-between"
        sx={{
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: "0", sm: "16px" },
        }}
      >
        <Stack spacing={4} backgroundColor="#f5f5f5" borderRadius={2} p={2}>
          {GROSS_MARGIN_RATIO_ITEMS.map((item) => {
            return (
              <Stack
                spacing={1}
                key={item.label}
                direction="row"
                alignItems="center"
                sx={{
                  maxWidth: { sm: "160px" },
                }}
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
        <Typography
          fontWeight="bold"
          fontSize={32}
          sx={{
            rotate: { xs: "90deg", sm: "0deg" },
          }}
        >
          <ArrowForwardIos sx={{ fontSize: 40 }} />
        </Typography>
        <Button
          variant="contained"
          fontWeight="bold"
          sx={{ fontSize: "20px" }}
          onClick={calculationGrossProfit}
          endIcon={<RocketLaunchIcon />}
        >
          計算実行
        </Button>
        <Stack
          flexGrow={1}
          borderRadius={2}
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
            <Typography variant="subtitle1" fontSize={24} lineHeight="1">
              粗利益：
            </Typography>
            <Stack direction="row" alignItems="center">
              <Typography variant="subtitle1" fontSize={36} lineHeight="1">
                {grossProfit}
              </Typography>
              <Typography variant="subtitle1" fontSize={24} lineHeight="1">
                円
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" alignItems="center" flexWrap="wrap">
            <Typography variant="subtitle1" fontSize={20} lineHeight="1">
              （粗利率：
            </Typography>
            <Stack direction="row" alignItems="center">
              <Typography variant="subtitle1" fontSize={24} lineHeight="1">
                {grossProfitRatio}
              </Typography>
              <Typography variant="subtitle1" fontSize={20} lineHeight="1">
                %）
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default GrossProfitRatio;
