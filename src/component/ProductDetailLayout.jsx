import { Box, Paper } from "@mui/material";
import ProductImage from "./ProductImage";
import ProductDetails from "./ProductDetails";

export default function (props) {
  const { data, onAddToCart } = props;
  return (
    <>
      <Paper
        sx={{
          mb: 4,
        }}
      >
        <Box
          sx={{
            p: 5,
            display: "flex",
            justifyContent: "space-evenly",
            gap: 5,
          }}
        >
          <ProductImage image={"https://source.unsplash.com/random"} />
          <ProductDetails
            name={data.name}
            price={data.price}
            description={data.description}
            onAddToCart={onAddToCart}
          />
        </Box>
      </Paper>
    </>
  );
}
