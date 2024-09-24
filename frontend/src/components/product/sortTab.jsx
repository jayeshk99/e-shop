import { MenuItem, Select, Typography } from "@mui/material";
import Box from "@mui/system/Box";
import "./../../index.css";
import { SORTING_OPTIONS } from "../../global/constants";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { useState } from "react";
export const SortTab = () => {
  const [sortType, setSortType] = useState("Recommended");
  const handleSortChange = (event) => {
    console.log("eventvalue", event.target.value);
    setSortType(event.target.value);
  };
  return (
    <Box
      height="18vh"
      width="100%"
      my={4}
      display="flex"
      alignItems="end"
      gap={4}
      p={2}
      sx={{ border: "1px solid var(--borderColor)" }}
      margin="0"
    >
      <Select
        displayEmpty
        sx={{ width: "20%", height: "5vh" }}
        value={sortType}
        renderValue={(selected) => `Sort By: ${sortType}`}
        onChange={handleSortChange}
      >
        <MenuItem key="Recommended" value="Recommended">
          Recommended
        </MenuItem>
        {SORTING_OPTIONS.map((value) => (
          <MenuItem key={value} value={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};
