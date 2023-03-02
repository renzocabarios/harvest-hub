import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Navbar from "./Navbar";
import Sidenav from "./Sidenav";

const mdTheme = createTheme();

function DashboardLayout(props) {
  const {
    children,
    links = [
      { title: "Users", link: "/dashboard/users" },
      { title: "Customers", link: "/dashboard/customers" },
      { title: "Farmers", link: "/dashboard/farmers" },
    ],
  } = props;
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <Navbar open={isOpen} toggleDrawer={toggleDrawer}></Navbar>
          <Sidenav open={isOpen} toggleDrawer={toggleDrawer} links={links} />
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
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              {children}
            </Container>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default DashboardLayout;
