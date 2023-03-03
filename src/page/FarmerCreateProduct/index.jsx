import * as React from "react";
import { DashboardLayout, Breadcrumb } from "@/component";
import {
  MenuItem,
  TextField,
  Typography,
  Grid,
  Box,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function FarmerCreateProduct() {
  const navigate = useNavigate();

  const productCreated = () => {
    navigate(`/dashboard/products`);
  };

  return (
    <>
      <DashboardLayout>
        <Breadcrumb />
        <Typography variant="h6" gutterBottom>
          Create Product
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="Name"
              name="Name"
              label="Name"
              fullWidth
              autoComplete="given-name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="Description"
              name="Description"
              label="Description"
              fullWidth
              autoComplete="family-name"
              variant="standard"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              id="price"
              name="price"
              label="Price"
              fullWidth
              autoComplete="family-name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="stock"
              name="stock"
              label="Stock"
              fullWidth
              autoComplete="family-name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="Farmer_id"
              label="Farmer"
              variant="standard"
              value="1"
              select
            >
              <MenuItem value="1">John Doe</MenuItem>
              <MenuItem value="2">Foo Bar</MenuItem>
              <MenuItem value="3">Lorem Ipsum</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                onClick={productCreated}
                variant="contained"
                sx={{ mt: 3, ml: 1 }}
              >
                Submit
              </Button>
            </Box>
          </Grid>
        </Grid>
      </DashboardLayout>
    </>
  );
}

export default FarmerCreateProduct;
