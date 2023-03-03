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

function CustomerCreateCartLine() {
  const navigate = useNavigate();

  const cartLineCreated = () => {
    navigate(`/dashboard/cart-line`);
  };

  return (
    <>
      <DashboardLayout>
        <Breadcrumb />
        <Typography variant="h6" gutterBottom>
          Create Cart Line
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="Product_id"
              label="Product"
              variant="standard"
              value="1"
              select
            >
              <MenuItem value="1">Tomato</MenuItem>
              <MenuItem value="2">Garlic</MenuItem>
              <MenuItem value="3">Onion</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="Cart_id"
              label="Cart"
              variant="standard"
              value="1"
              select
            >
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                onClick={cartLineCreated}
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

export default CustomerCreateCartLine;
