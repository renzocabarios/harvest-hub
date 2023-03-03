import * as React from "react";
import { DashboardLayout, Datatable } from "@/component";
import { useNavigate } from "react-router-dom";

function CustomerTransaction() {
  const navigate = useNavigate();
  const headers = ["ID", "Approved", "Confirmed", "Customer_id"];
  const keys = ["_id", "Approved", "", "Customer_id"];

  const [data, setData] = React.useState([
    {
      _id: "_id_1",
      Approved: "Approved",
      Confirmed: "Confirmed",
      Customer_id: "Customer_id",
    },
    {
      _id: "_id_2",
      Approved: "Approved",
      Confirmed: "Confirmed",
      Customer_id: "Customer_id",
    },
    {
      _id: "_id_3",
      Approved: "Approved",
      Confirmed: "Confirmed",
      Customer_id: "Customer_id",
    },
    {
      _id: "_id_4",
      Approved: "Approved",
      Confirmed: "Confirmed",
      Customer_id: "Customer_id",
    },
    {
      _id: "_id_5",
      Approved: "Approved",
      Confirmed: "Confirmed",
      Customer_id: "Customer_id",
    },
  ]);

  const handleDelete = (_id) => {
    setData(data.filter((item) => item._id !== _id));
  };

  const handleEdit = (_id) => {
    navigate(`/dashboard/transaction/edit/${_id}`);
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

export default CustomerTransaction;
