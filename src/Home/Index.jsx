/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HeaderComponent from "../components/Header.jsx";
import "antd/dist/antd.css";
import { Layout } from "antd";
import Login from "../features/Auth/Login/Index.jsx";
import NotFound from "../components/NotFound.jsx";
import Register from "../features/Auth/Register/Index.jsx";
import ProductSite from "../features/Product/Index.jsx";
import CartSite from "../features/Cart/Index.jsx";
import Detail from "../features/ProductDetail/Index.jsx";
import HomePage from "../features/Auth/Index.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Home(props) {
  const { Content } = Layout;
  const url = window.location.pathname.split("/");
  const token = localStorage.getItem("accessKey");
  const [count, setCount] = useState([]);

  useEffect(() => {
    getTotalCount();
  });

  let cartItem = JSON.parse(sessionStorage.getItem("cartItem"));
  const getTotalCount = () => {
    if (cartItem) {
      const count = [];
      cartItem.map((e) => count.push(e.quantity));
      let reducer = (accumulator, currentValue) => accumulator + currentValue;
      let total_count = count.reduce(reducer);
      setCount(total_count);
    }
  };

  const addCart = (id, price, image, name) => {
    const setCartItem = {
      idItem: id,
      quantity: 1,
      price: price,
      image: image,
      name: name,
    };

    if (cartItem != null) {
      let item = cartItem.find((e) => e.idItem == id);
      if (item) {
        item.quantity += 1;
      } else {
        cartItem = [...cartItem, setCartItem];
      }
    } else {
      cartItem = [setCartItem];
    }
    sessionStorage.setItem("cartItem", JSON.stringify(cartItem));
    getTotalCount();
  };

  const removeCartItem = (id) => {
    (cartItem || []).map((e, i) => {
      if ((cartItem || []).length <= 1) {
        sessionStorage.removeItem("cartItem");
        setCount(0);
      } else {
        if (e.idItem == id) {
          cartItem.splice(i, 1);
          sessionStorage.setItem("cartItem", JSON.stringify(cartItem));
          getTotalCount();
        }
      }
    });
  };

  const plus = (id) => {
    (cartItem || []).map((e) => {
      if (e.idItem == id) {
        e.quantity++;

        sessionStorage.setItem("cartItem", JSON.stringify(cartItem));
        getTotalCount();
      }
    });
  };

  const minus = (id) => {
    (cartItem || []).map((e, i) => {
      if (e.idItem == id) {
        e.quantity--;
        sessionStorage.setItem("cartItem", JSON.stringify(cartItem));
        getTotalCount();
      }
    });
  };

  const handleInput = (id, value) => {
    (cartItem || []).map((e) => {
      if (e.idItem == id) {
        if (Number(value) < 1) {
        } else {
          e.quantity = Number(value);
          sessionStorage.setItem("cartItem", JSON.stringify(cartItem));
          getTotalCount();
        }
      }
    });
  };

  if (!token) {
    return (
      <>
        <ToastContainer position={"top-center"} />
        <Routes>
          <Route path="/my-app/" element={<HomePage />} />
          <Route path="/my-app/login" element={<Login />} />
          <Route path="/my-app/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    );
  } else {
    return (
      <div>
        <ToastContainer position={"top-center"} />
        {url[1] === "login" ? null : <HeaderComponent count={count} />}
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 20 }}
        >
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            <Routes>
              <Route
                path="/my-app/"
                element={<ProductSite addCart={addCart} />}
              />
              <Route
                path="/my-app/cart"
                element={
                  <CartSite
                    removeCartItem={removeCartItem}
                    plus={plus}
                    minus={minus}
                    change={handleInput}
                  />
                }
              />
              <Route
                path="/product/:id"
                element={<Detail addCart={addCart} />}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Content>
      </div>
    );
  }
}

export default Home;
