import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useLocation } from "react-router-dom";
import { generateKey } from "../services/generateKey";

export default function Breadcrumb(props) {
  const location = useLocation();
  const breadcrumbs = location.pathname.split("/");
  breadcrumbs.shift();

  return (
    <>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<NavigateNextIcon fontSize="small" />}
      >
        {breadcrumbs.map((e) => (
          <Typography color="text.primary" key={generateKey(5)}>
            {e}
          </Typography>
        ))}
      </Breadcrumbs>
    </>
  );
}
