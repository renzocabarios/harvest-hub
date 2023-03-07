import * as React from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Breadcrumb from "./Breadcrumb";

function UserLayout(props) {
  const { children } = props;
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
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
              <Typography
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
              >
                Company name
              </Typography>
              {/* <nav>
                <Link
                  variant="button"
                  color="text.primary"
                  href="#"
                  sx={{ my: 1, mx: 1.5 }}
                >
                  Features
                </Link>
                <Link
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
                </Link>
              </nav>
              <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                Login
              </Button> */}
            </Toolbar>
          </AppBar>
          <Box sx={{ p: 5 }}>{children}</Box>
        </Box>
      </Box>
    </>
  );
}

export default UserLayout;
