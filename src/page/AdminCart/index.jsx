import * as React from "react";
import { DashboardLayout, Datatable, Breadcrumb } from "@/component";
import { useNavigate } from "react-router-dom";

export default function () {
  const navigate = useNavigate();
  const headers = ["ID", "Customer_id"];
  const keys = ["_id", "Customer_id"];

  const [data, setData] = React.useState([
    {
      _id: "_id_1",
      Customer_id: "Customer_id",
    },
    {
      _id: "_id_2",
      Customer_id: "Customer_id",
    },
    {
      _id: "_id_3",
      Customer_id: "Customer_id",
    },
    {
      _id: "_id_4",
      Customer_id: "Customer_id",
    },
    {
      _id: "_id_5",
      Customer_id: "Customer_id",
    },
  ]);

  const handleDelete = (_id) => {
    setData(data.filter((item) => item._id !== _id));
  };

  const handleEdit = (_id) => {
    navigate(`/dashboard/cart-line/edit/${_id}`);
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
