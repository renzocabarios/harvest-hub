import * as React from "react";
import { UserLayout, CardLayout } from "@/component";
import Grid from "@mui/material/Grid";
import { useGetProductsQuery } from "@/state/api/reducer";
import { generateKey } from "@/services/generateKey";

export default function () {
  const getProducts = useGetProductsQuery();

  if (getProducts.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <UserLayout>
        <CardLayout data={getProducts.data?.data}></CardLayout>
      </UserLayout>
    </>
  );
}
