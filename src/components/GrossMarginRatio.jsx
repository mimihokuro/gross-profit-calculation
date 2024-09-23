import { TextField } from "@mui/material";

const GrossMarginRatio = () => {
  const [cost, setCost] = useState(0);
  const [sales, setSales] = useState(0);
  const handleCost = (value) => {
    if (value >= 0) {
      setCost(value);
    }
  };
  const handleSales = (value) => {
    if (value >= 0) {
      setSales(value);
    }
  };

  const GROSS_MARGIN_RATIO_ITEMS = [
    { label: "原価", type: cost, func: handleCost },
    { label: "売上", type: sales, func: handleSales },
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
          type="number"
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
        <Typography variant="subtitle1" fontSize={24} fontWeight="bold">
    </>
  );
};

export default GrossMarginRatio;
