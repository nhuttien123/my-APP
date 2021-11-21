import React from "react";
import { Routes, Route } from "react-router-dom";
import HeaderComponent from "../components/Header.jsx";
import "antd/dist/antd.css";
import { Layout } from "antd";
import Login from "../features/Auth/Login/Index.jsx";
import NotFound from "../components/NotFound.jsx";
import Register from "../features/Auth/Register/Index.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const { Content } = Layout;
function Home(props) {
  const url = window.location.pathname.split("/");
  const token = localStorage.getItem("accessKey");
  if (!token) {
    return (
      <>
        <ToastContainer position={"top-center"} />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    );
  } else {
    return (
      <div>
        {url[1] === "login" ? null : <HeaderComponent />}
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 20 }}
        >
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            <Routes>{props.children}</Routes>
          </div>
        </Content>
      </div>
    );
  }
}

export default Home;
