import * as React from "react";
import { DashboardLayout, Datatable } from "@/component";
import { useNavigate } from "react-router-dom";

function FarmerProduct() {
  const navigate = useNavigate();
  const headers = ["ID", "Name", "Description", "Price", "Stock", "Farmer_id"];
  const keys = ["_id", "Name", "Description", "Price", "Stock", "Farmer_id"];

  const [data, setData] = React.useState([
    {
      _id: "_id_1",
      Name: "Name",
      Description: "Description",
      Price: "Price",
      Stock: "Stock",
      Farmer_id: "Farmer_id",
    },
    {
      _id: "_id_2",
      Name: "Name",
      Description: "Description",
      Price: "Price",
      Stock: "Stock",
      Farmer_id: "Farmer_id",
    },
    {
      _id: "_id_3",
      Name: "Name",
      Description: "Description",
      Price: "Price",
      Stock: "Stock",
      Farmer_id: "Farmer_id",
    },
    {
      _id: "_id_4",
      Name: "Name",
      Description: "Description",
      Price: "Price",
      Stock: "Stock",
      Farmer_id: "Farmer_id",
    },
    {
      _id: "_id_5",
      Name: "Name",
      Description: "Description",
      Price: "Price",
      Stock: "Stock",
      Farmer_id: "Farmer_id",
    },
  ]);

  const handleDelete = (_id) => {
    setData(data.filter((item) => item._id !== _id));
  };

  const handleEdit = (_id) => {
    navigate(`/dashboard/product/edit/${_id}`);
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

export default FarmerProduct;
