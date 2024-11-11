import React from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const para = useParams();
  console.log(para);
  return <div>Product</div>;
};

export default Product;
