import React, { useEffect, useState } from "react";
import { Stack } from "@mui/material";
import { Link, useHistory, useLocation, useRouteMatch } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import BuildLoading from "../global/loading/card/BuildLoading";
import "./dashboard.sass";
import PaginationView from "./Pagination";
import Product from "./Product";
import { getProducts } from "../../redux/product/ProductActions";
import {
  addProductCart,
  removeProductCart,
} from "../../redux/cart/CartActions";
import EmptyProducts from "./EmptyProducts";

const Dashboard = () => {
  const history = useHistory();
  let { path } = useRouteMatch();

  const [loading, setLoading] = useState(true);
  const [pageView, setPageView] = useState(1);

  const [showConfirm, setShowConfirm] = useState(false);
  const dispatch = useDispatch();
  const { products, query, paginate } = useSelector(
    (reducers: any) => reducers.productReducer
  );
  const { cart } = useSelector((reducers: any) => reducers.cartReducer);
  const [open, setOpen] = useState(false);
  const [currentData, setCurrentData] = useState();

  useEffect(() => {
    callbackgetProduct();
  }, [pageView, query]);
  const handleChange = (event: any, value: any) => {
    setPageView(value);
  };
  const callbackgetProduct = async () => {
    if (!loading) setLoading(true);
    await getProducts(dispatch, pageView, query);
    setLoading(false);
  };
  const onManageCart = async (e: any) => {
    let added = isAdded(e);
    if (added) {
      let conf = window.confirm(
        "Quitar producto?\n" +
          `¿Está seguro de quitar el producto ${e?.title} del carrito?`
      );
      if (conf) removeProductCart(dispatch, e);
      return;
    }
    await addProductCart(dispatch, e);
  };
  const onDetail = (e: any) => {
    history.push(`${path}product/` + e?._id);
  };
  const isAdded = (e: any) =>
    cart?.filter((c: any) => c?._id === e?._id)?.length;

  return (
    <>
      <Stack
        className={`${
          products?.length || loading ? "home__wrap" : "home__wrap--empty"
        } home__wrap--loading scroll-material`}
      >
        {loading ? (
          <BuildLoading />
        ) : products?.length ? (
          products?.map((product: any, i: number) => (
            <Product
              key={i}
              data={product}
              onManageCart={onManageCart}
              isAdded={isAdded(product)}
              onDetail={onDetail}
            />
          ))
        ) : (
          <EmptyProducts />
        )}
      </Stack>
      {/* {!loading && products?.length ? (
        <PaginationView
          paginate={paginate}
          page={pageView}
          handleChange={handleChange}
        />
      ) : null} */}
    </>
  );
};

export default Dashboard;
