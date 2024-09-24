import { Avatar, Box, Typography } from "@mui/material";
import { CartQtyButton } from "./cartQtyButton";
import { DeleteOutline } from "@mui/icons-material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
export const CartItem = ({
  title,
  desc,
  image,
  price,
  oldPrice,
  qty,
  id,
  cartQtyHandler,
  cartItemDeleteHandler,
}) => {
  return (
    <>
      {/* <Box
        display="flex"
        flexDirection="row"
        sx={{
          width: "75%",
          height: "170px",
          padding: "8px",
          border: `1px solid var(--borderColor)`,
        }}
      >
        <div
          style={{
            display: "flex",
            width: "20%",
          }}
        >
          <img
            src="https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/1/9/19aua10784-700501_1.jpg?rnd=20200526195200"
            style={{ width: "90%", margin: "auto" }}
          />
        </div>
        <div style={{ width: "70%", paddingLeft: "10px" }}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            Yufta
          </Typography>
          <Typography gutterBottom={true} variant="subtitle2">
            Black solid kurta with plazzo
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              margin: 0,
              padding: 0,
              alignItems: "end",
            }}
          >
            <Typography
              variant="subtitle1"
              style={{
                marginRight: "10px",
                fontWeight: "bold",
              }}
            >
              Rs.1,500
            </Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{ textDecoration: "line-through" }}
            >
              Rs.2900
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ color: "red", marginLeft: "10px" }}
            >
              ({Math.round(((2900 - 1500) / 2900) * 100)}% Off)
            </Typography>
          </div>
          <Typography variant="caption" sx={{ fontWeight: "bold" }}>
            CHANGE QUANTITY
          </Typography>
          <CartQtyButton itemQty={qty} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            width: "10%",
          }}
        >
          <DeleteForeverIcon sx={{ color: "var(--secondary-color)" }} />
        </div>
      </Box> */}

      <Box
        display="flex"
        flexDirection="row"
        sx={{
          width: "75%",
          height: "170px",
          padding: "8px",
          border: `1px solid var(--borderColor)`,
        }}
      >
        <div
          style={{
            display: "flex",
            width: "20%",
          }}
        >
          <img src={image} style={{ width: "90%", margin: "auto" }} />
        </div>
        <div style={{ width: "70%", paddingLeft: "10px" }}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            {title}
          </Typography>
          <Typography gutterBottom={true} variant="subtitle2">
            {desc}
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              margin: 0,
              padding: 0,
              alignItems: "end",
            }}
          >
            <Typography
              variant="subtitle1"
              style={{
                marginRight: "10px",
                fontWeight: "bold",
              }}
            >
              Rs.{price}
            </Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{ textDecoration: "line-through" }}
            >
              Rs.{oldPrice}
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ color: "red", marginLeft: "10px" }}
            >
              ({Math.round(((oldPrice - price) / oldPrice) * 100)}% Off)
            </Typography>
          </div>
          <Typography variant="caption" sx={{ fontWeight: "bold" }}>
            CHANGE QUANTITY
          </Typography>
          <CartQtyButton
            itemQty={qty}
            id={id}
            cartQtyHandler={cartQtyHandler}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            width: "10%",
          }}
        >
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              cartItemDeleteHandler(id);
            }}
          >
            <DeleteForeverIcon o sx={{ color: "var(--secondary-color)" }} />
          </div>
        </div>
      </Box>
    </>
  );
};
