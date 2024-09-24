import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Rating,
} from "@mui/material";
import { NavLink } from "react-router-dom";
export const ProductTile = ({ title, image, price, oldPrice, id }) => {
  return (
    <Card sx={{ width: "23%", mb: 3 }}>
      <NavLink to={id} style={{ textDecoration: "none", color: "inherit" }}>
        <CardMedia component="img" image={image} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              margin: 0,
              padding: 0,
            }}
          >
            <Typography
              variant="body2"
              style={{
                marginLeft: "10px",
                marginRight: "10px",
              }}
            >
              Rs.{oldPrice}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ textDecoration: "line-through" }}
            >
              Rs.{price}
            </Typography>
            <Typography variant="body2" style={{ color: "red" }}>
              ({Math.round(((oldPrice - price) / oldPrice) * 100)}% Off)
            </Typography>
          </div>
        </CardContent>
      </NavLink>
    </Card>
  );
};
