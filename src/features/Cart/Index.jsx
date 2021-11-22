/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";

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
    <div style={{ display: "flex" }}>
      {!sessionStorage.cartItem || (item || []).length == 0 ? (
        <h1>No item</h1>
      ) : (
        (item || []).map((e) => (
          <div key={e.idItem} style={{ marginLeft: "3rem" }}>
            Id item : {e.idItem}
            <p>Quantity: {e.quantity}</p>
            <p>Price: {e.price * e.quantity} Đ</p>
            <div>
              {e.quantity == 1 ? (
                <button onClick={() => childMinus(e.idItem)} disabled>
                  -
                </button>
              ) : (
                <button onClick={() => childMinus(e.idItem)}>-</button>
              )}

              <button onClick={() => childPlus(e.idItem)}>+</button>
              <button onClick={() => childRemove(e.idItem)}>x</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default CartSite;
