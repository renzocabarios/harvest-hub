import * as React from "react";
import { DashboardLayout, Datatable } from "@/component";
import { useNavigate } from "react-router-dom";

function CustomerTransactionLine() {
  const navigate = useNavigate();
  const headers = ["ID", "Product_id", "Transaction_id", "Quantity"];
  const keys = ["_id", "Product_id", "Transaction_id", "Quantity"];

  const [data, setData] = React.useState([
    {
      _id: "_id_1",
      Product_id: "Product_id",
      Transaction_id: "Transaction_id",
      Quantity: "Quantity",
    },
    {
      _id: "_id_2",
      Product_id: "Product_id",
      Transaction_id: "Transaction_id",
      Quantity: "Quantity",
    },
    {
      _id: "_id_3",
      Product_id: "Product_id",
      Transaction_id: "Transaction_id",
      Quantity: "Quantity",
    },
    {
      _id: "_id_4",
      Product_id: "Product_id",
      Transaction_id: "Transaction_id",
      Quantity: "Quantity",
    },
    {
      _id: "_id_5",
      Product_id: "Product_id",
      Transaction_id: "Transaction_id",
      Quantity: "Quantity",
    },
  ]);

  const handleDelete = (_id) => {
    setData(data.filter((item) => item._id !== _id));
  };

  const handleEdit = (_id) => {
    navigate(`/dashboard/transaction-line/edit/${_id}`);
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

export default CustomerTransactionLine;
