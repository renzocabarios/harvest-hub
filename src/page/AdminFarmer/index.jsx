import * as React from "react";
import { DashboardLayout, Datatable } from "@/component";
import { useGetFarmersQuery } from "@/state/api/reducer";

export default function () {
  const headers = ["ID", "Full Name", "Email"];
  const keys = [
    {
      key: "id",
    },
    {
      key: "user.first_name",
      operation: (value, row) => `${value} ${row.user.last_name}`,
    },
    {
      key: "user.email",
    },
  ];

  const getFarmers = useGetFarmersQuery();

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

  if (getFarmers.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <DashboardLayout>
        <Datatable
          headers={headers}
          keys={keys}
          actions={actions}
          data={getFarmers.data?.data}
        />
      </DashboardLayout>
    </>
  );
}
