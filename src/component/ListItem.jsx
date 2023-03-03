import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";

function ListItem(props) {
  const { title, link, icon } = props;

  const navigate = useNavigate();

  return (
    <>
      <ListItemButton
        onClick={() => {
          navigate(link);
        }}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={title} />
      </ListItemButton>
    </>
  );
}

export default ListItem;
