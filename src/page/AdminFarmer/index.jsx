import * as React from "react";
import { DashboardLayout, Datatable } from "@/component";
import { useGetFarmersQuery } from "@/state/api/reducer";

function AdminFarmer() {
  const headers = ["ID", "First Name", "Last Name", "Email"];
  const keys = ["id", "user.first_name", "user.last_name", "user.email"];

  const getFarmers = useGetFarmersQuery();

  const handleDelete = (_id) => {};

  const handleEdit = (_id) => {
    // navigate(`/dashboard/farmers/edit/${_id}`);
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

export default AdminFarmer;
