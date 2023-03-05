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
import { useAddUserMutation } from "@/state/api/reducer";
import { useFormik } from "formik";
import { createUserValidation } from "../../validation";

function AdminCreateUser() {
  const [addUser, { data, isLoading, isSuccess }] = useAddUserMutation();

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      type: "",
    },
    validationSchema: createUserValidation,
    onSubmit: (values) => {
      addUser(values);
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <DashboardLayout>
        <Typography variant="h6" gutterBottom>
          Create User
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="first_name"
                name="first_name"
                label="First name"
                fullWidth
                autoComplete="given-name"
                variant="standard"
                value={formik.values.first_name}
                onChange={formik.handleChange}
                error={
                  formik.touched.first_name && Boolean(formik.errors.first_name)
                }
                helperText={
                  formik.touched.first_name && formik.errors.first_name
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="last_name"
                name="last_name"
                label="Last name"
                fullWidth
                autoComplete="family-name"
                variant="standard"
                value={formik.values.last_name}
                onChange={formik.handleChange}
                error={
                  formik.touched.last_name && Boolean(formik.errors.last_name)
                }
                helperText={formik.touched.last_name && formik.errors.last_name}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="type"
                name="type"
                label="Account Type"
                variant="standard"
                select
                value={formik.values.type}
                onChange={formik.handleChange}
                error={formik.touched.type && Boolean(formik.errors.type)}
                helperText={formik.touched.type && formik.errors.type}
              >
                <MenuItem value="Admin">Admin</MenuItem>
                <MenuItem value="farmer">Farmer</MenuItem>
                <MenuItem value="Customer">Customer</MenuItem>
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
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
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
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
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
                <Button type="submit" variant="contained" sx={{ mt: 3, ml: 1 }}>
                  Submit
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </DashboardLayout>
    </>
  );
}

export default AdminCreateUser;
