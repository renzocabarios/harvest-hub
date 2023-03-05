import * as React from "react";
import { DashboardLayout, Datatable } from "@/component";
import { useGetProductsQuery } from "@/state/api/reducer";

function AdminProduct() {
  const headers = ["ID", "Name", "Description", "Price"];
  const keys = ["id", "name", "description", "price"];

  const getProducts = useGetProductsQuery();

  const handleDelete = (_id) => {};

  const handleEdit = (_id) => {
    // navigate(`/dashboard/product/edit/${_id}`);
  };

  const actions = [
    {
      onClick: handleEdit,
      title: "Edit",
    },
    {
      onClick: handleDelete,
      title: "Delete",
    },
  ];

  if (getProducts.isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <DashboardLayout>
        <Datatable
          headers={headers}
          keys={keys}
          actions={actions}
          data={getProducts.data?.data}
        />
      </DashboardLayout>
    </>
  );
}

export default AdminProduct;
