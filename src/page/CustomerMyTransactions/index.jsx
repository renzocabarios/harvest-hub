import * as React from "react";
import { UserLayout, Datatable } from "@/component";
import { useGetTransactionsByCustomerQuery } from "@/state/api/reducer";

export default function () {
  // customer_id is hardcoded for now
  const customer_id = 1;
  const getTransactionsByCustomer =
    useGetTransactionsByCustomerQuery(customer_id);

  const headers = ["Customer", "Number of Items", "Total Cost", "Created At"];
  const keys = [
    {
      key: "customer.user.first_name",
      operation: (value, row) => `${value} ${row.customer.user.last_name}`,
    },
    {
      key: "transaction_lines",
      operation: (value, row) => `${value.length} Items`,
    },
    {
      key: "transaction_lines",
      operation: (value, row) =>
        `${value.reduce((a, i) => a + i.quantity * i.product.price, 0)} PHP`,
    },
    {
      key: "created_at",
    },
  ];

  const actions = [];

  if (getTransactionsByCustomer.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <UserLayout>
        <Datatable
          headers={headers}
          keys={keys}
          actions={actions}
          data={getTransactionsByCustomer.data?.data}
        />
      </UserLayout>
    </>
  );
}
