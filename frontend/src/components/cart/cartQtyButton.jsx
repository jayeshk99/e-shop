import { Box, Button } from "@mui/material";
import { useState } from "react";
import "./../../index.css";
import "./cart.css";
import { CHANGE_TYPES } from "./config";
export const CartQtyButton = ({ itemQty, id, cartQtyHandler }) => {
  return (
    <>
      <Box display="flex">
        <button
          className="qtyButton"
          onClick={() => {
            console.log("id:", id);
            cartQtyHandler(CHANGE_TYPES.DECREASE, id);
          }}
          style={{ cursor: "pointer" }}
        >
          -
        </button>

        <div
          className="qtyButton"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "var(--primary-color)",
            color: "black",
            border: "1px solid var(--secondary-color)",
            marginLeft: "15px",
            marginRight: "15px",
          }}
        >
          {itemQty}
        </div>
        <button
          style={{ cursor: "pointer" }}
          className="qtyButton"
          onClick={() => {
            console.log("id:", id);
            cartQtyHandler(CHANGE_TYPES.INCREASE, id);
          }}
        >
          +
        </button>
      </Box>
    </>
  );
};
