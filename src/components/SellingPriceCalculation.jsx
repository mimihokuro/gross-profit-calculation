import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { ArrowForwardIos } from "@mui/icons-material";

const SellingPriceCalculation = () => {
  const [cost, setCost] = useState("");
  const [grossProfit, setGrossProfit] = useState("");
  const [sellingPrice, setSellingPrice] = useState(0);
  const [taxIncludedSellingPrice, setTaxIncludedSellingPrice] = useState(0);

  const calculationGrossProfit = () => {
    const parseCost = parseFloat(cost);
    const parseGrossProfit = parseFloat(grossProfit / 100);
    if (!isNaN(parseCost) && !isNaN(parseGrossProfit)) {
      const calculatedSellingPrice = Math.floor(
        parseCost / (1 - parseGrossProfit)
      );
      const calculatedTaxIncludedSellingPrice = Math.floor(
        calculatedSellingPrice * 1.1
      );
      setSellingPrice(calculatedSellingPrice.toLocaleString());
      setTaxIncludedSellingPrice(
        calculatedTaxIncludedSellingPrice.toLocaleString()
      );
    } else {
      setSellingPrice(0);
      setTaxIncludedSellingPrice(0);
    }
  };

  const GROSS_MARGIN_RATIO_ITEMS = [
    { label: "原価", type: cost, func: setCost, unit: "円" },
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
                <Typography variant="subtitle1">{item.unit}</Typography>
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
              売価：
            </Typography>
            <Stack direction="row" alignItems="center">
              <Typography variant="subtitle1" fontSize={36} lineHeight="1">
                {taxIncludedSellingPrice}
              </Typography>
              <Typography variant="subtitle1" fontSize={24} lineHeight="1">
                円
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" alignItems="center" flexWrap="wrap">
            <Typography variant="subtitle1" fontSize={20} lineHeight="1">
              （税抜：
            </Typography>
            <Stack direction="row" alignItems="center">
              <Typography variant="subtitle1" fontSize={24} lineHeight="1">
                {sellingPrice}
              </Typography>
              <Typography variant="subtitle1" fontSize={20} lineHeight="1">
                円）
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default SellingPriceCalculation;
