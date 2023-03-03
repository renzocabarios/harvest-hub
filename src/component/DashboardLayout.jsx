import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Navbar from "./Navbar";
import Sidenav from "./Sidenav";
import CategoryIcon from "@mui/icons-material/Category";
import PersonIcon from "@mui/icons-material/Person";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import NaturePeopleIcon from "@mui/icons-material/NaturePeople";

const mdTheme = createTheme();

function DashboardLayout(props) {
  const {
    children,
    links = [
      { title: "Users", link: "/dashboard/users", icon: <PeopleAltIcon /> },
      {
        title: "Customers",
        link: "/dashboard/customers",
        icon: <PersonIcon />,
      },
      {
        title: "Farmers",
        link: "/dashboard/farmers",
        icon: <NaturePeopleIcon />,
      },
      {
        title: "Products",
        link: "/dashboard/products",
        icon: <CategoryIcon />,
      },
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
