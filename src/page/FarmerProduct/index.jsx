import { UserLayout, Datatable, Button } from "@/component";
import { useNavigate } from "react-router-dom";
import {
  useGetProductsQuery,
  useDeleteProductsMutation,
} from "@/state/api/reducer";

function AdminProduct() {
  const headers = ["ID", "Name", "Description", "Price", "Farmer"];

  const keys = [
    {
      key: "id",
    },
    {
      key: "name",
    },
    {
      key: "description",
    },
    {
      key: "price",
      operation: (value, row) => `PHP ${value}`,
    },
    {
      key: "farmer.user.first_name",
      operation: (value, row) => `${value} ${row.farmer.user.last_name} `,
    },
  ];

  const navigate = useNavigate();
  const [deleteProduct, deleteProductMutation] = useDeleteProductsMutation();

  const getProducts = useGetProductsQuery();

  const handleDelete = (id) => {
    deleteProduct(id);
  };

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

  if (getProducts.isLoading || deleteProductMutation.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <UserLayout>
        <Button
          title="Add Product"
          onClick={() => {
            navigate("/farmer/products/create");
          }}
        />
        <Datatable
          headers={headers}
          keys={keys}
          actions={actions}
          data={getProducts.data?.data}
        />
      </UserLayout>
    </>
  );
}

export default AdminProduct;
