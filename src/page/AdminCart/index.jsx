import * as React from "react";
import { DashboardLayout, Datatable } from "@/component";
import { useGetCartsQuery } from "@/state/api/reducer";

export default function () {
  const headers = ["ID", "Customer Name", "No. of Items"];

  const keys = [
    {
      key: "id",
    },
    {
      key: "customer.user.first_name",
      operation: (value, row) => `${value} ${row.customer.user.last_name}`,
    },
    {
      key: "cart_lines",
      operation: (value, row) => `${value.length}`,
    },
  ];

  const getCarts = useGetCartsQuery();

  const handleDelete = (_id) => {};

  const handleEdit = (_id) => {};

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

  if (getCarts.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <DashboardLayout>
        <Datatable
          headers={headers}
          keys={keys}
          actions={actions}
          data={getCarts.data?.data}
        />
      </DashboardLayout>
    </>
  );
}
