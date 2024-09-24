import { Box, Button, Divider, Typography } from "@mui/material";
import "./../../index.css";
import "./cart.css";
export const CartSummary = () => {
  return (
    <div
      style={{
        width: "35%",
        marginTop: "10vh",
      }}
    >
      <Box sx={{ width: "60%" }}>
        <div className="priceRow">
          <Typography variant="subtitle2">PRICE DETAILS</Typography>
          <Typography variant="subtitle2">(1 items)</Typography>
        </div>
        <div className="priceRow">
          <Typography variant="subtitle2">Total MRP</Typography>
          <Typography variant="subtitle2">Rs. 2,999</Typography>
        </div>
        <div className="priceRow">
          <Typography variant="subtitle2">Discount On MRP</Typography>
          <Typography variant="subtitle2">Rs.1,499</Typography>
        </div>
        <div className="priceRow">
          <Typography variant="subtitle2">Convinience Fee</Typography>
          <Typography variant="subtitle2">Rs.699</Typography>
        </div>
        <Divider style={{ marginBottom: "10px" }} />
        <div className="priceRow">
          <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
            Total Amount
          </Typography>
          <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
            Rs.1,500
          </Typography>
        </div>
        <button
          style={{
            backgroundColor: "var(--secondary-color)",
            width: "100%",
            height: "40px",
            color: "var(--primary-color)",
            border: "0",
          }}
        >
          <Typography variant="subtitle1" fontWeight="bold">
            CONTINUE
          </Typography>
        </button>
      </Box>
    </div>
  );
};
