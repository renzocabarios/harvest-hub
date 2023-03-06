import * as React from "react";
import { UserLayout, Breadcrumb } from "@/component";
import {
  MenuItem,
  TextField,
  Typography,
  Grid,
  Box,
  Button,
  Select,
} from "@mui/material";
import { useAddProductMutation, useGetFarmersQuery } from "@/state/api/reducer";
import { useFormik } from "formik";
import { createProductValidation } from "../../validation";
import { useNavigate } from "react-router-dom";

function FarmerCreateProduct() {
  const navigate = useNavigate();
  const [addProduct, { data, isLoading, isSuccess }] = useAddProductMutation();
  const { data: farmers } = useGetFarmersQuery();

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      price: "",
      farmer_id: "",
    },
    validationSchema: createProductValidation,
    onSubmit: (values) => {
      addProduct(values);
      navigate("/farmer/products");
      console.log(values);
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <UserLayout>
        <Typography variant="h6" gutterBottom>
          Create Product
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                required
                id="name"
                name="name"
                label="Name"
                fullWidth
                autoComplete="product name"
                variant="standard"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="description"
                name="description"
                label="Description"
                fullWidth
                autoComplete="product description"
                variant="standard"
                value={formik.values.description}
                onChange={formik.handleChange}
                error={
                  formik.touched.description &&
                  Boolean(formik.errors.description)
                }
                helperText={
                  formik.touched.description && formik.errors.description
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="price"
                name="price"
                label="Price"
                fullWidth
                autoComplete="price"
                variant="standard"
                type="number"
                value={formik.values.price}
                onChange={formik.handleChange}
                error={formik.touched.price && Boolean(formik.errors.price)}
                helperText={formik.touched.price && formik.errors.price}
              />
            </Grid>
            <Grid item xs={12}>
              <Select
                id="farmer_id"
                name="farmer_id"
                fullWidth
                value={formik.values.farmer_id}
                onChange={formik.handleChange}
                label="Farmer"
              >
                {farmers?.data.map(
                  ({ id, user: { first_name, last_name } }) => (
                    <MenuItem key={id} value={id}>
                      {`${first_name} ${last_name}`}
                    </MenuItem>
                  )
                )}
              </Select>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={!formik.dirty || !formik.isValid}
              >
                Create
              </Button>
            </Grid>
          </Grid>
        </form>
      </UserLayout>
    </>
  );
}

export default FarmerCreateProduct;
