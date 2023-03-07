import * as React from "react";
import { UserLayout, Datatable } from "@/component";
import { useGetCartByIdQuery } from "@/state/api/reducer";
import { Button, Box } from "@mui/material";

export default function () {
  // cart_id is hardcoded for now
  const cart_id = 1;
  const getCartById = useGetCartByIdQuery(cart_id);

  const headers = ["Quantity", "Product", "Price", "Description", "Farmer"];
  const keys = [
    {
      key: "quantity",
    },
    {
      key: "product.name",
    },
    {
      key: "product.price",
      operation: (value, row) => `${value} PHP`,
    },
    {
      key: "product.description",
    },
    {
      key: "product.farmer.user.first_name",
      operation: (value, row) =>
        `${value} ${row.product.farmer.user.last_name}`,
    },
  ];

  const handleDelete = () => {};

  const actions = [
    {
      onClick: handleDelete,
      title: "Remove",
    },
  ];

  if (getCartById.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <UserLayout>
        <Datatable
          headers={headers}
          keys={keys}
          actions={actions}
          data={getCartById.data?.data[0].cart_lines}
        />
        <Box sx={{ display: "flex", justifyContent: "end" }}>
          <Button variant="contained" sx={{ mt: 3 }}>
            Checkout
          </Button>
        </Box>
      </UserLayout>
    </>
  );
}
