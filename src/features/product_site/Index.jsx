import { unwrapResult } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/slice/Product";

function ProductSite() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.products);
  console.log(data.data, "loading: " + data.loading, "error:" + data.error);

  useEffect(() => {
    unwrapResult(dispatch(getProduct()));
  }, [dispatch]);

  return <h1>Product site</h1>;
}
export default ProductSite;
