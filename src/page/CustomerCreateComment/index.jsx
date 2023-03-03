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

function CustomerCreateComment() {
  const navigate = useNavigate();

  const commentCreated = () => {
    navigate(`/dashboard/comments`);
  };

  return (
    <>
      <DashboardLayout>
        <Breadcrumb />
        <Typography variant="h6" gutterBottom>
          Create Comment
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
              id="rate"
              name="rate"
              label="Rate"
              fullWidth
              autoComplete="family-name"
              variant="standard"
              select
            >
              {[1, 2, 3, 4, 5].map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

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
                onClick={commentCreated}
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

export default CustomerCreateComment;
