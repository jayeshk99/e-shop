import { Typography } from "@mui/material";
import Box from "@mui/system/Box";
import "./../../index.css";
export const FilterTitle = () => {
  return (
    <Box
      height="18vh"
      width="100%"
      my={4}
      display="flex"
      alignItems="end"
      gap={4}
      p={2}
      sx={{}}
      margin="0"
    >
      <Typography variant="h6" color="var(--textColor)" fontWeight="bold">
        FILTERS
      </Typography>
    </Box>
  );
};
