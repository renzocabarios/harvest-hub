import * as React from "react";
import { UserLayout, Carttable } from "@/component";
import { ButtonGroup, Button, Box } from "@mui/material";

function CustomerCartView() {
  const cartItems = [
    {
      name: "Product 1",
      description: "Description 1",
      price: "10.99",
      image: "https://picsum.photos/140/450",
      quantity: 1,
    },
    {
      name: "Product 2",
      description: "Description 2",
      price: "15.99",
      image: "https://picsum.photos/140/450",
      quantity: 2,
    },
  ];

  const headers = ["Name", "Description", "Price", "Image", "Quantity"];
  const keys = [
    { key: "name" },
    { key: "description" },
    { key: "price" },
    {
      key: "image",
      operation: (value, row) => (
        <img src={value} alt="product" height="150px" width="120px" />
      ),
    },
    {
      key: "quantity",
      operation: (value, row) => (
        <ButtonGroup variant="contained" aria-label="product quantity">
          <Button>-</Button>
          <Button disabled>{value}</Button>
          <Button>+</Button>
        </ButtonGroup>
      ),
    },
  ];

  const handleDelete = () => {};

  const actions = [
    {
      onClick: handleDelete,
      title: "Remove",
    },
  ];

  return (
    <>
      <UserLayout>
        <Carttable
          headers={headers}
          keys={keys}
          hasActions={true}
          actions={actions}
          data={cartItems}
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

export default CustomerCartView;
