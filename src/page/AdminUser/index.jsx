import * as React from "react";
import { DashboardLayout, Datatable, Breadcrumb, Button } from "@/component";
import { useGetUsersQuery } from "@/state/api/reducer";
import { useNavigate } from "react-router-dom";
import { useDeleteUserMutation } from "@/state/api/reducer";

function AdminUser() {
  const navigate = useNavigate();
  const [deleteUser, deleteUserMutation] = useDeleteUserMutation();
  const getUsersQuery = useGetUsersQuery();

  const headers = ["ID", "First Name", "Last Name", "Email", "Type"];
  const keys = ["id", "first_name", "last_name", "email", "type"];

  const handleDelete = (id) => {
    deleteUser(id);
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

  if (getUsersQuery.isLoading || deleteUserMutation.isLoading) {
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
          data={getUsersQuery.data.data}
        />
      </DashboardLayout>
    </>
  );
}

export default AdminUser;
