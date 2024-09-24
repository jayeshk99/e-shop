import {
  AppBar,
  Toolbar,
  Typography,
  Badge,
  Stack,
  Button,
} from "@mui/material";
import {
  AccountCircle,
  ShoppingCartOutlined,
  FavoriteBorderOutlined,
} from "@mui/icons-material";

import { NavLink } from "react-router-dom";
import { LoginModal } from "./loginModal";
import { useState } from "react";
import "./../index.css";

export const NavBar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <AppBar position="static">
        <Toolbar
          sx={{
            justifyContent: "space-between",
            backgroundColor: `var(--primary-color)`,
            color: `var(--textColor)`,
            height: "15vh",
          }}
        >
          <Typography
            variant="h5"
            component="div"
            sx={{
              color: `var(--secondary-color)`,
              fontWeight: "bold",
            }}
          >
            E-Shop
          </Typography>
          <Stack direction="row" spacing={10}>
            <NavLink
              // style={{
              //   color: "inherit",
              //   textDecoration: "inherit",
              //   backgroundColor: ({ IsActive }) => (IsActive ? "black" : ""),
              // }}
              style={({ isActive }) =>
                isActive
                  ? {
                      color: `var(--secondary-color)`,
                      textDecoration: "inherit",
                      // backgroundColor: "#002884",
                    }
                  : {
                      color: "inherit",
                      textDecoration: "inherit",
                    }
              }
              to={"men"}
            >
              <Button color="inherit" sx={{ fontSize: "18px" }}>
                Men
              </Button>
            </NavLink>
            <NavLink
              to={"women"}
              style={({ isActive }) =>
                isActive
                  ? {
                      color: "var(--secondary-color)",
                      textDecoration: "inherit",
                      // backgroundColor: "#002884",
                    }
                  : {
                      color: "inherit",
                      textDecoration: "inherit",
                    }
              }
            >
              <Button color="inherit" sx={{ fontSize: "18px" }}>
                Women
              </Button>
            </NavLink>
          </Stack>
          <Stack direction="row" spacing={10}>
            <Stack direction="column" alignItems="center">
              <FavoriteBorderOutlined
                sx={{ fontSize: "25px", cursor: "pointer" }}
                onClick={handleOpen}
              />
              <Typography variant="subtitle2">Wishlist</Typography>
            </Stack>
            <NavLink to={"cart"} style={{ textDecoration: "none" }}>
              <Stack direction="column" alignItems="center">
                <ShoppingCartOutlined
                  sx={{ fontSize: "25px", cursor: "pointer" }}
                />
                <Typography variant="subtitle2">Cart</Typography>
              </Stack>
            </NavLink>
            <Stack direction="column" alignItems="center">
              <AccountCircle
                sx={{ fontSize: "25px", cursor: "pointer" }}
                onClick={handleOpen}
              />
              <Typography variant="subtitle2">Profile</Typography>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
      <LoginModal
        open={open}
        handleClose={handleClose}
        setOpen={setOpen}
        handleOpen={handleOpen}
      />
    </>
  );
};

// map the elements
