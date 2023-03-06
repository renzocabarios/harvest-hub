import * as React from "react";
import { DashboardLayout, Datatable } from "@/component";
import { useGetTransactionsQuery } from "@/state/api/reducer";

export default function () {
  const headers = [
    "ID",
    "Full Name",
    "No. of Items",
    "Total Cost",
    "Date Created",
  ];
  const keys = [
    {
      key: "id",
    },
    {
      key: "customer.user.first_name",
      operation: (value, row) => `${value} ${row.customer.user.last_name}`,
    },
    {
      key: "transaction_lines",
      operation: (value, row) => `${value.length} `,
    },
    {
      key: "transaction_lines",
      operation: (value, row) => {
        const initialValue = 0;
        return `PHP ${JSON.stringify(
          value.reduce(
            (accumulator, currentValue) =>
              accumulator + currentValue.quantity * currentValue.product.price,
            initialValue
          )
        )} `;
      },
    },
    {
      key: "created_at",
      operation: (value, row) => `${value} `,
    },
  ];

  const getTransactions = useGetTransactionsQuery();

  const handleDelete = (_id) => {};

  const handleEdit = (_id) => {};

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

  if (getTransactions.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <DashboardLayout>
        <Datatable
          headers={headers}
          keys={keys}
          actions={actions}
          data={getTransactions.data?.data}
        />
      </DashboardLayout>
    </>
  );
}
