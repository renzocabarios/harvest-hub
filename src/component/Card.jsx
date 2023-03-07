import {
  Card,
  CardActionArea,
  Box,
  Typography,
  CardMedia,
  CardContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function (props) {
  const { id = 0, name = "", price = 0, description = "" } = props;

  const navigate = useNavigate();

  return (
    <>
      <Card
        sx={{ maxWidth: 500 }}
        onClick={() => {
          navigate(`/product/${id}`);
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            width="100%"
            image="https://picsum.photos/140/450"
            alt="green iguana"
          />
          <CardContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                {`${price} PHP`}
              </Typography>
            </Box>

            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
