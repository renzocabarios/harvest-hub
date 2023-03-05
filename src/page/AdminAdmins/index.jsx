import * as React from "react";
import { DashboardLayout, Datatable, Breadcrumb, Button } from "@/component";
import { useNavigate } from "react-router-dom";
import {
  useGetAdminsQuery,
  useDeleteAdminsMutation,
} from "@/state/api/reducer";

function AdminAdmins() {
  const navigate = useNavigate();
  const getAdmins = useGetAdminsQuery();
  const [deleteAdmins, deleteAdminsMutation] = useDeleteAdminsMutation();

  const headers = ["ID", "First Name", "Last Name", "Email"];
  const keys = ["id", "user.first_name", "user.last_name", "user.email"];

  const handleDelete = (id) => {
    deleteAdmins(id);
  };

  const handleEdit = (_id) => {
    // navigate(`/dashboard/users/edit/${_id}`);
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

  if (getAdmins.isLoading || deleteAdminsMutation.isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <DashboardLayout>
        <Breadcrumb />
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

export default AdminAdmins;
