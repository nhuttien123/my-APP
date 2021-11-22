import { unwrapResult } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getProduct } from "../../redux/Slice/Product";

function ProductSite({ addCart }) {
  const dispatch = useDispatch();
  // const { data } = useSelector((state) => state.products);
  // console.log(data);

  useEffect(() => {
    unwrapResult(dispatch(getProduct()));
  }, [dispatch]);

  return (
    <>
      <button onClick={() => addCart(1, 200)}>add cart 1</button>
      <button style={{ marginLeft: "2rem" }} onClick={() => addCart(2, 500)}>
        add cart 2
      </button>
    </>
  );
}
export default ProductSite;
