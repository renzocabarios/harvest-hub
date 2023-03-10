import * as React from "react";
import { DashboardLayout, Datatable } from "@/component";
import { useGetCartByIdQuery } from "@/state/api/reducer";
import { useParams } from "react-router-dom";
import { numToPHP } from "@/services/currency";

export default function () {
  const params = useParams();
  const getCartById = useGetCartByIdQuery(params.id);
  const headers = ["Name", "Quantity", "Price", "Whole Cost", "Farmer"];

  const keys = [
    {
      key: "product.name",
    },
    {
      key: "quantity",
    },
    {
      key: "product.price",
      operation: (value, row) => numToPHP(value),
    },
    {
      key: "product.price",
      operation: (value, row) => numToPHP(value * row.quantity),
    },
    {
      key: "product.farmer.user.first_name",
      operation: (value, row) =>
        `${value} ${row.product.farmer.user.last_name}`,
    },
  ];

  const actions = [];

  if (getCartById.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <DashboardLayout>
        <Datatable
          headers={headers}
          keys={keys}
          actions={actions}
          data={getCartById.data?.data[0].cart_lines}
        />
        <h1>
          {`TOTAL COST: ${numToPHP(
            getCartById.data?.data[0].cart_lines.reduce(function (
              result,
              item
            ) {
              return result + item.quantity * item.product.price;
            },
            0)
          )} `}
        </h1>
      </DashboardLayout>
    </>
  );
}
