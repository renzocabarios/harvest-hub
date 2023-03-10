import * as React from "react";
import { DashboardLayout, Datatable } from "@/component";
import { useGetCartsQuery } from "@/state/api/reducer";
import { useNavigate } from "react-router-dom";

export default function () {
  const navigate = useNavigate();

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

  const handleView = (_id) => {
    navigate(`/dashboard/carts/${_id}`);
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
    {
      onClick: handleView,
      title: "View",
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
