import { Box, CardMedia } from "@mui/material";

export default function (props) {
  const { image } = props;
  return (
    <>
      <Box sx={{ height: "500px", width: "40%", borderRadius: 2 }}>
        <CardMedia
          component="img"
          sx={{ height: "100%", width: "100%", borderRadius: 2 }}
          image={image}
          alt={image}
        />
      </Box>
    </>
  );
}
