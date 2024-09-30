import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { ArrowForwardIos } from "@mui/icons-material";

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
      label: "売上／売価",
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
          onClick={calculationCost}
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
              原価：
            </Typography>
            <Stack direction="row" alignItems="center">
              <Typography variant="subtitle1" fontSize={36} lineHeight="1">
                {cost}
              </Typography>
              <Typography variant="subtitle1" fontSize={24} lineHeight="1">
                円
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default CostCalculation;
