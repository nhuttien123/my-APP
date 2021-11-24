/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import ListCart from "./ListCart";

function CartSite({ removeCartItem, plus, minus }) {
  const [item, setItem] = useState([]);

  useEffect(() => {
    displayCart();
  }, []);

  const displayCart = () => {
    const getFromStorage = JSON.parse(sessionStorage.getItem("cartItem"));
    if (getFromStorage) {
      setItem(getFromStorage);
    }
  };

  const childRemove = (id) => {
    removeCartItem(id);
    displayCart();
  };

  const childPlus = (id) => {
    plus(id);
    displayCart();
  };

  const childMinus = (id) => {
    minus(id);
    displayCart();
  };

  return (
    <>
      {(item || []).length == 0 || !sessionStorage.cartItem ? (
        <h1 style={{ textAlign: "center" }}>No item</h1>
      ) : (
        (item || []).map((e) => (
          <ListCart
            style={{ width: "100%" }}
            remove={childRemove}
            plus={childPlus}
            minus={childMinus}
            data={e}
            key={e.id}
          >
            {" "}
          </ListCart>
        ))
      )}
    </>
  );
}

export default CartSite;
