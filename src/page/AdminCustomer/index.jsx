import * as React from "react";
import { DashboardLayout, Datatable } from "@/component";
import { useNavigate } from "react-router-dom";

function AdminCustomer() {
  const navigate = useNavigate();
  const headers = ["ID", "First Name", "Last Name", "Email"];
  const keys = ["_id", "firstName", "lastName", "email"];

  const [data, setData] = React.useState([
    {
      _id: "_id_1",
      firstName: "firstName",
      lastName: "lastName",
      email: "email",
    },
    {
      _id: "_id_2",
      firstName: "firstName",
      lastName: "lastName",
      email: "email",
    },
    {
      _id: "_id_3",
      firstName: "firstName",
      lastName: "lastName",
      email: "email",
    },
    {
      _id: "_id_4",
      firstName: "firstName",
      lastName: "lastName",
      email: "email",
    },
    {
      _id: "_id_5",
      firstName: "firstName",
      lastName: "lastName",
      email: "email",
    },
  ]);

  const handleDelete = (_id) => {
    setData(data.filter((item) => item._id !== _id));
  };

  const handleEdit = (_id) => {
    navigate(`/dashboard/customers/edit/${_id}`);
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

  return (
    <>
      <DashboardLayout>
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

export default AdminCustomer;
