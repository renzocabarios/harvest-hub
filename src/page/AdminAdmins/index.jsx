import * as React from "react";
import { DashboardLayout, Datatable, Button } from "@/component";
import { useNavigate } from "react-router-dom";
import {
  useGetAdminsQuery,
  useDeleteAdminsMutation,
} from "@/state/api/reducer";

export default function () {
  const navigate = useNavigate();
  const getAdmins = useGetAdminsQuery();
  const [deleteAdmins, deleteAdminsMutation] = useDeleteAdminsMutation();

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

  const handleDelete = (id) => {
    deleteAdmins(id);
  };

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

  if (getAdmins.isLoading || deleteAdminsMutation.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <DashboardLayout>
        <Button
          title="Add User"
          onClick={() => {
            navigate("/dashboard/users/create");
          }}
        />
        <Datatable
          headers={headers}
          keys={keys}
          actions={actions}
          data={getAdmins.data?.data}
        />
      </DashboardLayout>
    </>
  );
}
