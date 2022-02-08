import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../redux/product/ProductActions";

const ProductDetail = () => {
  const { id }: any = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getProductDetail();
  }, []);
  const getProductDetail = async () => {
    await getProduct(id);
    setLoading(false);
  };

  return <div>Detail of product {id}</div>;
};

export default ProductDetail;
