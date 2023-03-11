import * as React from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Breadcrumb from "./Breadcrumb";
import { useNavigate } from "react-router-dom";

function UserLayout(props) {
  const { children } = props;

  const navigate = useNavigate();

  return (
    <>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <AppBar position="absolute">
          <Toolbar sx={{ flexWrap: "wrap" }}>
            {/* Company name */}
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
              onClick={() => {
                navigate("/home");
              }}
            >
              Company name
            </Typography>
            <nav>
              <Typography
                variant="h6"
                color="inherit"
                noWrap
                sx={{ mx: 1.5, display: "inline-block" }}
                onClick={() => {
                  navigate("/my-cart");
                }}
              >
                My Cart
              </Typography>
              <Typography
                variant="h6"
                color="inherit"
                noWrap
                sx={{ mx: 1.5, display: "inline-block" }}
                onClick={() => {
                  navigate("/my-transactions");
                }}
              >
                Transactions
              </Typography>
              {/* <Link
                  variant="button"
                  color="text.primary"
                  href="#"
                  sx={{ my: 1, mx: 1.5 }}
                >
                  Enterprise
                </Link>
                <Link
                  variant="button"
                  color="text.primary"
                  href="#"
                  sx={{ my: 1, mx: 1.5 }}
                >
                  Support
                </Link> */}
            </nav>
            {/* <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                Login
              </Button> */}
          </Toolbar>
        </AppBar>
        <Box sx={{ p: 5 }}>{children}</Box>
      </Box>
    </>
  );
}

export default UserLayout;
