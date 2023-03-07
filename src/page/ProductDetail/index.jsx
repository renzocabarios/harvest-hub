import * as React from "react";
import { UserLayout, ProductDetailLayout } from "@/component";
import { useGetProductByIdQuery } from "@/state/api/reducer";
import { useParams } from "react-router-dom";
import { useAddCartLineMutation } from "@/state/api/reducer";

export default function () {
  const params = useParams();
  const getProductById = useGetProductByIdQuery(params.id);
  const [addCartLine, addCartLineMutation] = useAddCartLineMutation();

  // customer_id is hardcoded for now
  // quantity is hardcoded for now
  const handleOnAddToCart = () => {
    addCartLine({ product_id: params.id, customer_id: 1, quantity: 1 });
  };

  if (getProductById.isLoading || addCartLineMutation.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <UserLayout>
        <ProductDetailLayout
          data={getProductById.data?.data[0]}
          onAddToCart={handleOnAddToCart}
        />
      </UserLayout>
    </>
  );
}
