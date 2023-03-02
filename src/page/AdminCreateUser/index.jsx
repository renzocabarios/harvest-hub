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

function AdminCreateUser() {
  return (
    <>
      <DashboardLayout>
        <Breadcrumb />
        <Typography variant="h6" gutterBottom>
          Create User
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              autoComplete="given-name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last name"
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
              id="type"
              label="Account Type"
              variant="standard"
              value="admin"
              select
            >
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="farmer">Farmer</MenuItem>
              <MenuItem value="customer">Customer</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="personal email"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="password"
              name="password"
              label="Password"
              fullWidth
              autoComplete="secret password"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="confirmPassword"
              name="confirmPassword"
              label="Confirm Password"
              fullWidth
              autoComplete="confirm secret password"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button variant="contained" sx={{ mt: 3, ml: 1 }}>
                Submit
              </Button>
            </Box>
          </Grid>
        </Grid>
      </DashboardLayout>
    </>
  );
}

export default AdminCreateUser;
