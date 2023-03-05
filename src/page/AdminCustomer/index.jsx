import * as React from "react";
import { DashboardLayout, Datatable } from "@/component";
import { useGetCustomersQuery } from "@/state/api/reducer";

function AdminCustomer() {
  const getCustomers = useGetCustomersQuery();

  const headers = ["ID", "First Name", "Last Name", "Email"];
  const keys = ["id", "user.first_name", "user.last_name", "user.email"];

  const handleDelete = (_id) => {
    // setData(data.filter((item) => item._id !== _id));
  };

  const handleEdit = (_id) => {
    // navigate(`/dashboard/customers/edit/${_id}`);
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

  if (getCustomers.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <DashboardLayout>
        <Datatable
          headers={headers}
          keys={keys}
          actions={actions}
          hasActions={true}
          data={getCustomers.data?.data}
        />
      </DashboardLayout>
    </>
  );
}

export default AdminCustomer;
