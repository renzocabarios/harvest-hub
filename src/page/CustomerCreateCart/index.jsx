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

function CustomerCreateCart() {
  const navigate = useNavigate();

  const cartCreated = () => {
    navigate(`/dashboard/carts`);
  };

  return (
    <>
      <DashboardLayout>
        <Breadcrumb />
        <Typography variant="h6" gutterBottom>
          Create Cart
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="Customer_id"
              label="Customer"
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
                onClick={cartCreated}
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

export default CustomerCreateCart;
