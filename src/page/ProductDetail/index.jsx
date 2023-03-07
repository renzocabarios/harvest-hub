import * as React from "react";
import { UserLayout, ProductDetailLayout } from "@/component";
import { useGetProductByIdQuery } from "@/state/api/reducer";
import { useParams } from "react-router-dom";

export default function () {
  const params = useParams();
  const getetProductById = useGetProductByIdQuery(params.id);

  if (getetProductById.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <UserLayout>
        <ProductDetailLayout data={getetProductById.data?.data[0]} />
      </UserLayout>
    </>
  );
}
