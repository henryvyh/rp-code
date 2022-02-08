import React from "react";
import { useParams } from "react-router-dom";

const Category = () => {
  const { id }: any = useParams();

  return <div>Detail of categroy {id}</div>;
};

export default Category;
