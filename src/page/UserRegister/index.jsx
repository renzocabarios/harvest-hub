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
import { useAddUserMutation } from "@/state/api/reducer";
import { useFormik } from "formik";
import { createUserValidation } from "@/validation";

function Register() {
  const navigate = useNavigate();
  const [addUser, addUserMutation] = useAddUserMutation();
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      type: "",
      password: "",
    },
    validationSchema: createUserValidation,
    onSubmit: (values) => {
      addUser(values);
    },
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = () => {
    navigate(`/login`);
  };

  if (addUserMutation.isLoading) {
    return <div>Loading...</div>;
  }

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
          <form onSubmit={formik.handleSubmit} sx={{ height: "100%" }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="first_name"
              label="First Name"
              name="first_name"
              autoComplete="first name"
              autoFocus
              value={formik.values.first_name}
              onChange={formik.handleChange}
              error={
                formik.touched.first_name && Boolean(formik.errors.first_name)
              }
              helperText={formik.touched.first_name && formik.errors.first_name}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="last_name"
              label="Last Name"
              name="last_name"
              autoComplete="last name"
              autoFocus
              value={formik.values.last_name}
              onChange={formik.handleChange}
              error={
                formik.touched.last_name && Boolean(formik.errors.last_name)
              }
              helperText={formik.touched.last_name && formik.errors.last_name}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="type"
              name="type"
              label="Account Type"
              select
              value={formik.values.type}
              onChange={formik.handleChange}
              error={formik.touched.type && Boolean(formik.errors.type)}
              helperText={formik.touched.type && formik.errors.type}
            >
              <MenuItem value="farmer">Farmer</MenuItem>
              <MenuItem value="Customer">Customer</MenuItem>
            </TextField>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              id="password"
              name="password"
              label="Password"
              fullWidth
              type={showPassword ? "text" : "password"}
              autoComplete="secret password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
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
