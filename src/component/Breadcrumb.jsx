import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link, useLocation } from "react-router-dom";
import { generateKey } from "../services/generateKey";

export default function Breadcrumb(props) {
  const location = useLocation();
  const breadcrumbs = location.pathname.split("/");
  breadcrumbs.shift();

  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateNextIcon fontSize="small" />}
    >
      {breadcrumbs.map((e, i) => (
        <Typography key={generateKey(5)}>
          <Link
            to={`/${breadcrumbs.slice(0, i + 1).join("/")}${
              i === breadcrumbs.length - 1 && e !== "create" ? "/create" : ""
            }`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {i === breadcrumbs.length - 1
              ? "Create"
              : e.charAt(0).toUpperCase() + e.slice(1)}
          </Link>
        </Typography>
      ))}
    </Breadcrumbs>
  );
}
