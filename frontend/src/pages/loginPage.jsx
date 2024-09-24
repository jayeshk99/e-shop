import {
  Button,
  Box,
  Typography,
  TextField,
  Stack,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../services/auth/authThunk";
import { useNavigate, useLocation } from "react-router-dom";

export const LoginPage = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    // border: "2px solid #000",
    boxShadow: 1,
    p: 5,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 2,
  };
  //   const { open, handleClose, setOpen, handleOpen } = props;
  const [formSelected, setFormSelected] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isAuthenticated } = useSelector((state) => state.login);
  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();
  const handleFormSelection = (e) => {
    // console.log("selection:", se?lection);
    setFormSelected(e.target.value);
  };
  const handleEnteredEmail = (e) => {
    console.log("entered email", e.target.value);
    setEmail(e.target.value);
  };
  const handleEnteredPassword = (e) => {
    console.log("entered password", e.target.value);
    setPassword(e.target.value);
  };
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (isAuthenticated) {
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, from]);
  const loginHandler = ({ email, password }) => {
    console.log("login clicked");
    dispatch(userLogin({ email, password }));
    if (isAuthenticated) {
      navigate(from, { replace: true });
    }
  };
  return (
    <div>
      <Box sx={style} component="form">
        {/* <Button onClick={handleOpen}>Close Model</Button> */}
        <Stack direction="column">
          <ToggleButtonGroup
            color="primary"
            value={formSelected}
            onChange={handleFormSelection}
          >
            <ToggleButton value="login">Login</ToggleButton>
            <ToggleButton value="signup">SignUp</ToggleButton>
          </ToggleButtonGroup>
        </Stack>
        <TextField
          fullWidth
          error={false}
          type="email"
          label="E-mail"
          variant="outlined"
          value={email}
          onInput={handleEnteredEmail}
        />
        <TextField
          fullWidth
          type="password"
          label="Password"
          variant="outlined"
          value={password}
          onInput={handleEnteredPassword}
        />

        <Button
          variant="contained"
          sx={{
            color: "var(--primary-color)",
            backgroundColor: "var(--secondary-color)",
            width: "100%",
            padding: "10px",
            "&:hover": {
              backgroundColor: "var(--secondary-color)",
            },
            marginLeft: "15px",
          }}
          onClick={() => {
            loginHandler({ email: email, password: password });
          }}
        >
          <Typography sx={{ fontWeight: "bold" }}>
            {formSelected == "login" ? "Login" : "SignUp"}
          </Typography>
        </Button>
      </Box>
    </div>
  );
};
