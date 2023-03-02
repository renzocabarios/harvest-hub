import * as React from "react";
import { DashboardLayout, Datatable } from "@/component";
import Button from "@mui/material/Button";

function AdminFarmer() {
  const headers = ["ID", "First Name", "Last Name", "Email", "Type"];
  const keys = ["_id", "firstName", "lastName", "email", "type"];
  const actions = [
    {
      onClick: (_id) => {},
      title: "Edit",
    },
    { onClick: (_id) => {}, title: "Delete" },
  ];

  const data = [
    {
      _id: "_id",
      firstName: "firstName",
      lastName: "lastName",
      email: "email",
      type: "type",
    },
    {
      _id: "_id",
      firstName: "firstName",
      lastName: "lastName",
      email: "email",
      type: "type",
    },
    {
      _id: "_id",
      firstName: "firstName",
      lastName: "lastName",
      email: "email",
      type: "type",
    },
    {
      _id: "_id",
      firstName: "firstName",
      lastName: "lastName",
      email: "email",
      type: "type",
    },
    {
      _id: "_id",
      firstName: "firstName",
      lastName: "lastName",
      email: "email",
      type: "type",
    },
  ];

  return (
    <>
      <DashboardLayout>
        <Button onClick={() => {}}>Add User</Button>
        <Datatable
          headers={headers}
          keys={keys}
          actions={actions}
          hasActions={true}
          data={data}
        />
      </DashboardLayout>
    </>
  );
}

export default AdminFarmer;
