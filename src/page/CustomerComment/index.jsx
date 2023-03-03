import * as React from "react";
import { DashboardLayout, Datatable, Breadcrumb } from "@/component";
import { useNavigate } from "react-router-dom";

function CustomerComment() {
  const navigate = useNavigate();
  const headers = ["ID", "Name", "Description", "Rate", "Customer_id"];
  const keys = ["_id", "Name", "Description", "Rate", "Customer_id"];

  const [data, setData] = React.useState([
    {
      _id: "_id_1",
      Name: "Name",
      Description: "Description",
      Rate: "Rate",
      Customer_id: "Customer_id",
    },
    {
      _id: "_id_2",
      Name: "Name",
      Description: "Description",
      Rate: "Rate",
      Customer_id: "Customer_id",
    },
    {
      _id: "_id_3",
      Name: "Name",
      Description: "Description",
      Rate: "Rate",
      Customer_id: "Customer_id",
    },
    {
      _id: "_id_4",
      Name: "Name",
      Description: "Description",
      Rate: "Rate",
      Customer_id: "Customer_id",
    },
    {
      _id: "_id_5",
      Name: "Name",
      Description: "Description",
      Rate: "Rate",
      Customer_id: "Customer_id",
    },
  ]);

  const handleDelete = (_id) => {
    setData(data.filter((item) => item._id !== _id));
  };

  const handleEdit = (_id) => {
    navigate(`/dashboard/comment/edit/${_id}`);
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

export default CustomerComment;
