import React from "react";
import ProductForm from "../components/ProductForm";

const AddProduct = ({ onAddProduct }) => {
  return (
    <div>
      <ProductForm onSubmit={onAddProduct} />
    </div>
  );
};

export default AddProduct;
