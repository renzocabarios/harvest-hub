import * as React from "react";
import { DashboardLayout, Datatable, Breadcrumb } from "@/component";
import { useGetUsersQuery } from "@/state/api/reducer";
import { useNavigate } from "react-router-dom";

function AdminUser() {
  const navigate = useNavigate();
  const { isLoading } = useGetUsersQuery();
  const headers = ["ID", "First Name", "Last Name", "Email", "Type"];
  const keys = ["_id", "firstName", "lastName", "email", "type"];

  const [data, setData] = React.useState([
    {
      _id: "_id_1",
      firstName: "firstName",
      lastName: "lastName",
      email: "email",
      type: "type",
    },
    {
      _id: "_id_2",
      firstName: "firstName",
      lastName: "lastName",
      email: "email",
      type: "type",
    },
    {
      _id: "_id_3",
      firstName: "firstName",
      lastName: "lastName",
      email: "email",
      type: "type",
    },
    {
      _id: "_id_4",
      firstName: "firstName",
      lastName: "lastName",
      email: "email",
      type: "type",
    },
    {
      _id: "_id_5",
      firstName: "firstName",
      lastName: "lastName",
      email: "email",
      type: "type",
    },
  ]);

  const handleDelete = (_id) => {
    setData(data.filter((item) => item._id !== _id));
  };

  const handleEdit = (_id) => {
    navigate(`/dashboard/users/edit/${_id}`);
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
        <Breadcrumb />
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

export default AdminUser;
