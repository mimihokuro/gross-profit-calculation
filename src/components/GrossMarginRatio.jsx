import { TextField } from "@mui/material";

const GrossMarginRatio = ({ items }) => {
  const GROSS_MARGIN_RATIO_ITEMS = items;
  console.log(items);

  return (
    <>
      {GROSS_MARGIN_RATIO_ITEMS.map((item) => (
        <TextField
          id="outlined-basic"
          key={item.label}
          type="number"
          label={item.label}
          variant="outlined"
        />
      ))}
    </>
  );
};

export default GrossMarginRatio;
