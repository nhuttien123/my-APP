import React from "react";
import { Menu, Layout } from "antd";
import { Link } from "react-router-dom";

function HeaderComponent() {
  const { Header } = Layout;
  return (
    <Header style={{ zIndex: 1, width: "100%" }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1">
          {" "}
          <Link to={"/my-app"}>Trang chủ</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to={"/product"}>Sản phẩm</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to={"/cart"}>Giỏ hàng</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
}

export default HeaderComponent;
