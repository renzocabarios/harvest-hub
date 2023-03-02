import * as React from "react";
import { DashboardLayout, Datatable } from "@/component";
import Button from "@mui/material/Button";
import { useGetUsersQuery } from "@/state/api/reducer";

function AdminUser() {
  const { data = {}, isLoading } = useGetUsersQuery();
  const headers = ["ID", "First Name", "Last Name", "Email"];
  const keys = ["id", "first_name", "last_name", "email"];

  const actions = [
    {
      onClick: (_id) => {},
      title: "Edit",
    },
    { onClick: (_id) => {}, title: "Delete" },
  ];

  if (isLoading) return <></>;

  return (
    <>
      <DashboardLayout>
        <Button onClick={() => {}}>Add User</Button>
        <Datatable
          headers={headers}
          keys={keys}
          actions={actions}
          hasActions={true}
          data={data.data}
        />
      </DashboardLayout>
    </>
  );
}

export default AdminUser;
