import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  TextField,
  Typography,
  MenuItem,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Box } from "@mui/system";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import RegisterImg from "@/assets/register.png";
import "./style.css";

function Register() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState(""),
    [lastName, setLastName] = useState(""),
    [type, setType] = useState(""),
    [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/login`);
  };

  const handleLogin = () => {
    navigate(`/login`);
  };

  return (
    <Container sx={{ mt: 7.5, mb: 5 }} disableGutters>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          gap: "2rem",
        }}
      >
        <Box sx={{ width: "50%", height: "100%" }}>
          <img
            src={RegisterImg}
            alt="RegisterImg"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
        <Box sx={{ width: "40%", height: "100%" }}>
          <Typography variant="h4" align="center" gutterBottom>
            Sign Up
          </Typography>
          <Typography variant="h5" align="center">
            Get us some of your information to get a free access to our website.
          </Typography>
          <form onSubmit={handleSubmit} sx={{ height: "100%" }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="firstName"
              label="First Name"
              name="firstName"
              autoComplete="given-name"
              autoFocus
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="given-name"
              autoFocus
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="type"
              label="Account Type"
              name="type"
              select
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="farmer">Farmer</MenuItem>
              <MenuItem value="customer">Customer</MenuItem>
            </TextField>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {
                <span
                  style={{
                    textTransform: "capitalize",
                    fontSize: "1.15rem",
                  }}
                >
                  Sign Up
                </span>
              }
            </Button>
          </form>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 1,
            }}
          >
            <Typography
              variant="h6"
              align="center"
              gutterBottom
              sx={{
                mt: 1,
              }}
            >
              Already Have An Account?
            </Typography>
            <Button
              type="button"
              onClick={handleLogin}
              variant="text"
              color="secondary"
              sx={{ ml: 2 }}
            >
              {
                <span
                  style={{
                    textTransform: "capitalize",
                    fontSize: "1.2rem",
                  }}
                >
                  Register Here
                </span>
              }
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default Register;
