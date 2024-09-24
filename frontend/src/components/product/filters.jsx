import Box from "@mui/system/Box";
import "./../../index.css";
import {
  DISCOUNT_CATEGORIES,
  PRODUCT_CATEGORIES,
} from "../../global/constants";
import { Filter } from "./filter";
export const Filters = () => {
  return (
    <Box
      //   height="25vh"
      width="100%"
      my={4}
      gap={4}
      display="flex"
      flexDirection="column"
      p={2}
      sx={{ border: `1px solid var(--borderColor)` }}
      margin="0"
    >
      <Filter filterName="Categories" filterList={PRODUCT_CATEGORIES} />
      <Filter filterName="Discount" filterList={DISCOUNT_CATEGORIES} />
    </Box>
  );
};
