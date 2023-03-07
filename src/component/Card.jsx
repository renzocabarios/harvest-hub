import {
  Card,
  CardActionArea,
  Box,
  Typography,
  CardMedia,
  CardContent,
} from "@mui/material";

export default function (props) {
  const { name = "", price = 0, description = "" } = props;
  return (
    <>
      <Card sx={{ maxWidth: 500 }}>
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
